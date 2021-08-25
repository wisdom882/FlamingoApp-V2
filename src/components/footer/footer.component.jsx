import React from "react";

import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Socials</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/wisdom882/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/wisdom_882/">Instagram</a>
              </li>
              <li>
                <a href="mailto:miabiyewisdom@gmail.com">Email</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            {/* <h4>Socials</h4>
            <ul>
              <li>Facebook</li>
              <li>SnapChat</li>
              <li>Instagram</li>
              <li>Contact</li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
