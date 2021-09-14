import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socialIcons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="icons" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="icons" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </a>

          <ul className="list">
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
