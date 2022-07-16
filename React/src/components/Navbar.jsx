import React from "react";
import "./Navbar.css";
import logo from "../images/Frame 37.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="middle">
          <ul className="links">
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Past editions</a>
            </li>
            <li>
              <a href="#">Future editions</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Make a donation</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <a href="#" className="login">
            Log In
          </a>
          <a href="#" className="create">
            Create Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
