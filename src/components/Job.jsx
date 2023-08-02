import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Job.css";

const Job = () => {
  return (
    <div className="job">
      <div className="job-heading">Searching for jobs ?</div>
      <div className="jobs">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{backgroundColor: "black", width: "200px", marginBottom:"20px"}}
          >
            Job Collections
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="">
              Remote First Future Job
            </a>
            <a className="dropdown-item" href="">
              Software Engineer Jobs
            </a>
            <a className="dropdown-item" href="">
              Jobs for Bootcamp Grads
            </a>
            <a className="dropdown-item" href="">
              Junior Developer Jobs
            </a>
            <a className="dropdown-item" href="">
              Data Scientist Jobs
            </a>
            <a className="dropdown-item" href="">
              Product Manager Jobs
            </a>
            <a className="dropdown-item" href="">
              Top Women-Led startup Jobs
            </a>
            <a className="dropdown-item" href="">
              More Jobs
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{backgroundColor: "black", width: "200px"}}
          >
            Remote Jobs
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="">
            Remote Software Engineer Jobs
            </a>
            <a className="dropdown-item" href="">
            Remote Data Scientist Jobs
            </a>
            <a className="dropdown-item" href="">
            Remote Product Manager Jobs
            </a>
            <a className="dropdown-item" href="">
            Remote Junior Developer Jobs
            </a>
            <a className="dropdown-item" href="">
            Remote Senior Developer Jobs
            </a>
            <a className="dropdown-item" href="">
            More remote Jobs
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{backgroundColor: "black", width: "200px"}}
          >
            Jobs by Location
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="">
              Jobs in India
            </a>
            <a className="dropdown-item" href="">
              Jobs in USA
            </a>
            <a className="dropdown-item" href="">
            Jobs in Germany
            </a>
            <a className="dropdown-item" href="">
            Jobs in France
            </a>
            <a className="dropdown-item" href="">
            Jobs in Canada
            </a>
            <a className="dropdown-item" href="">
            Jobs in Australia
            </a>
            <a className="dropdown-item" href="">
            Jobs in Singapore
            </a>
            <a className="dropdown-item" href="">
            Jobs in Japan
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{backgroundColor: "black", width: "200px"}}
          >
          Jobs by Role
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="">
            Software Engineer Jobs
            </a>
            <a className="dropdown-item" href="">
            Data Scientist Jobs
            </a>
            <a className="dropdown-item" href="">
            Product Manager Jobs
            </a>
            <a className="dropdown-item" href="">
            Junior Developer Jobs
            </a>
            <a className="dropdown-item" href="">
            Senior Developer Jobs
            </a>
            <a className="dropdown-item" href="">
            UI/UX designer Jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
