import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Footer from './components/Footer';
import { API_KEY } from './constants/constants';

/********************
Header
Gallery -> Photo
Details
Footer
*********************/

function App(props) {

  const [ data, setData ] = useState([]) 


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
    <div className="App">
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
    </div>
  );
}

export default App;
