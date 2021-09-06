import React from "react";

import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socialIcons">
          <h4>Socials</h4>
          <li className="socialLists">
            <a href="https://www.facebook.com/wisdom882/">Facebook</a>
          </li>
          <li className="socialLists">
            <a href="https://www.instagram.com/wisdom_882/">Instagram</a>
          </li>
          <li className="socialLists">
            <a href="mailto:miabiyewisdom@gmail.com">Email</a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
