import React, { useEffect } from "react";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom"
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";


const App = (props) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/profile" element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
