import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { NavNavLink } from "react-router-dom";

const Navbar = () => {
  if(window.innerWidth< "1000px"){
    console.log(window.innerWidth);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary opacity-100" data-bs-theme="dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <h4>Breaking-News</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to='/entertainment'>
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to='/health'>
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to='/science'>
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to='/sports'>
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " aria-current="page" to='/technology'>
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
