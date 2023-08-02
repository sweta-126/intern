import React from "react";
import "./Body.css";
import {data} from "../Data"

const Body = () => {
  return (
    <div className="bodypart">
      <div className="body-heading">Loved by leading staffing teams around the world</div>
      <ul className="aboutjob">
        <li className="aboutjob-item" >130K+ Tech Jobs</li>
        <li className="aboutjob-item">6,000,000 Matches Made</li>
        <li className="aboutjob-item" >8M+ Startup-ready candidates</li>
      </ul>
      <div className="slider-container">
        <ul className="slider">
          {data.map((item) => (
            <li key={item.id} className="slide">
              <img src={item.img} alt="" className="slide-img"/>
            </li>
          ))}
        </ul>
      </div>
      <div className="body-text">For at least 5 years we've been dreaming of a tool to streamline our client experience. Since rolling out Coursify we're seeing usage increase with our clients, giving us a more professional image. Looking to be a part of Coursify ?</div>
      <div className="body-btns">
        <button className="btn1">Register</button>
        <span>OR</span>
        <button className="btn2" style={{display:"flex",alignItems:"center"}}>Sign up with <img className="google" src="/images/google.png" alt=""/></button>
      </div>
    </div>
  );
};

export default Body;
