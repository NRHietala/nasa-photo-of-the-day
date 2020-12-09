import React from "react";
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Footer from './components/Footer';



// useEffect(() => {
//   axios
//   .get(``)
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }, [])


/********************
Header
Gallery -> Photo
Details
Footer
*********************/
function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
