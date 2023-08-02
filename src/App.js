import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Job from './components/Job';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Body/>
      <Job/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App