import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About/About'
import Account from './components/Account/Account'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Signup from './components/Signup/Signup'
import Skills from './components/Skills/Skills'

function App() {
  return (
      //Java Logic here
      <>
      {/* //html logic here */}
        <Router>
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/About">About</Link>&nbsp;
            <Link to="/Contact">Contact Me</Link>&nbsp;
            <Link to="/Profile">Profile</Link>&nbsp;
            <Link to="/Skills">Skills</Link>&nbsp;
          </nav>
          <nav className='nav-2'>
            <Link to="/Signup">Signup</Link>&nbsp;
            <Link to="/Login">Login</Link>&nbsp;
            <Link to="/Account">Account</Link>&nbsp;
          </nav>
          
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
