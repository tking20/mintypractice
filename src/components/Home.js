// Home.js
import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route} from "react-router-dom";
import Navbar from '../NavBar';
import About from './About';
const Home = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>Thomas</h1>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
};

export default Home;