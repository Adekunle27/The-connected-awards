import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer__container">
          <div className="footer__1">
            <h4>About</h4>
            <ul className="permalinks">
              <li>
                <a href="#">The Connected Magazine</a>
              </li>
              <li>
                <a href="#">Past Editions</a>
              </li>
              <li>
                <a href="#">Celebrated Techies</a>
              </li>
            </ul>
          </div>
          <div className="footer__2">
            <h4>Legal</h4>
            <ul className="privacy">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__3">
            <h4>Social</h4>

            <ul>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="footer__4">
            <ul className="">
              <h4>Contact</h4>
              <li>
                <a href="#">+1098765432</a>
              </li>
              <li>
                <a href="#">Chat on WhatsApp</a>
              </li>
              <li>
                <a href="#">connectedawards@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <a href="index.html" className="footer__logo">
            <img src="./images/The connected awards 2 1.png" alt="" />
          </a>
          <p>Celebrating Techies Globally</p>
        </div>
        <div className="footer__copyright">
          <small>© 2022 The Conected Awards - All rights reserved</small>
        </div>
      </div>
    </>
  );
};

export default Footer;
