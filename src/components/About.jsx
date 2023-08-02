import React from "react";
import "./About.css"
import { blog } from "../Data";
import Card from "./Card";

const About = () => {
  return (
    <div className="about">
      <div className="p">
        <div className="img-wrapper">
          <img src="/images/sideimg-1.png" alt="" className="p-img" />
        </div>
        <div className="p-text">
          <h1>Why job seekers love us</h1>
          <ul>
            <li>Unique jobs at startups and tech companies you can't find anywhere else.</li>
            <li>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</li>
            <li>Everything you need to know to job search - including seeing salary and stock options upfront when looking.</li>
            <li>Connect directly with founders at top startups - no third party recruiters allowed.</li>
          </ul>
          <div className="about-btns">
            <button className="btn1">Learn More</button>
            <button className="btn2">Sign up Now</button>
          </div>
        </div>
      </div>
      <div className="p">
        <div className="p-text">
          <h1>Why recruiters love us</h1>
          <ul>
            <li>8 million responsive and startup-ready candidates, with all the information you need to vet them.</li>
            <li>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free.</li>
            <li>A free applicant tracking system, or free integration with any ATS you may already use.</li>
          </ul>
          <div className="about-btns">
            <button className="btn1">Learn More</button>
            <button className="btn2">Sign up Now</button>
          </div>
        </div>
        <div className="img-wrapper">
          <img src="/images/sideimg-2.png" alt="" className="p-img" />
        </div>
      </div>
      <div className="blog">
        <div className="blog-heading">From the blog...</div>
        <ul className="blog-lists">
        {blog.map((item)=>(
           <li key={item.id}> <Card  title={item.title} desc = {item.desc} /> </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
