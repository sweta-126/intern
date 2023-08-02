import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
      <div className="hero-text-heading">Welcome to Coursify !</div>
      <div className="hero-text-content">Where startups and Jobseekers connect</div>
      <div className="hero-btns">
      <button className="btn1">Find your next hire</button>
      <button className="btn2">Find your next job</button>
      </div>
    </div>
    <div className="animation">
    <div className="shape left"></div>
    <div className="shape right"></div>
    <div className="circle top"></div>
    <div className="circle bottom"></div>
    <div className="text">Welcome!</div>
    </div>
    </div>
  )
}

export default Hero