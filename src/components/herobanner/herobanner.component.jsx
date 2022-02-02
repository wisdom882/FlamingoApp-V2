import React from "react";
import "./herobanner.styles.css";
import { useHistory } from "react-router-dom";

const HeroBanner = ({ imageUrl, text, title, path }) => {
  //handleclick
  //take in path
  const history = useHistory();
  const handleClick = (path) => {
    console.log("clicks");
    console.log(path);
    history.push(path);
  };
  return (
    <div>
      {/* <div className="imageContainer">
        <img src={imageUrl} alt=" " />
      </div> */}
      <div className="card">
        <div className="top-half">
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-body">{text}</p>
            <a href={path} className="card-button">
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
