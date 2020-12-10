import React, { useState,useEffect } from "react";
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Footer from './components/Footer';
import { API_KEY } from './constants/constants';
import styled from 'styled-components';

/********************
Header
Gallery -> Photo
Details
Footer
*********************/

function App(props) {

  const [ data, setData ] = useState([]) 

  const Wrapper = styled.div `

* {
  padding: 0px;
  margin:0px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

    box-sizing:border-box;
    background: url("https://ffwallpaper.com/wallup/cosmo/cosmo-12.jpg");
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
  `


  useEffect(()=> {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2020-12-08`)
        .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        .catch(err => 
          console.log(err)
          )}, [])


  return (
    <Wrapper>
      <Header
      title={data.title}
      date={data.date}
      />
      <Gallery photo={data.url}/>
      <Details
      explanation={data.explanation}
      hdPhoto={data.hdurl}
      />
      <Footer 
      copyright={data.copyright}
      />
    </Wrapper>
  );
}

export default App;
