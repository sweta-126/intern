import React from "react";
import "./Footer.css";
import { BsInstagram , BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="f-name">Coursify</div>
        <div className="links">
          <BsInstagram className="icon" />
          <BsTwitter className="icon" />
        </div>
        <div className="copyright">
        <span>Copyright © 2023 Coursify. All rights reserved.</span>
        <span>Browse by:  Jobs, Remote Jobs, Locations, Startups, Industries, Tech Hubs</span>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>For Candidates</h3>
          <ul>
            <li>Overview</li>
            <li>Startup Jobs</li>
            <li>Web3 Jobs</li>
            <li>Featured</li>
            <li>Tech Startups</li>
            <li>Salary Calculator</li>
            <li>Remote</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>For Recruiters</h3>
          <ul>
            <li>Overview</li>
            <li>Recruiter Pro</li>
            <li>Curated</li>
            <li>RecruiterCloud</li>
            <li>Hire Developers</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>For Company</h3>
          <ul>
            <li>About</li>
            <li>Coursify Venture</li>
            <li>Help</li>
            <li>Blog</li>
            <li>Terms & Risks</li>
            <li>Privacy & Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
