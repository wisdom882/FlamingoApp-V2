import React from "react";
import "./herobanner.styles.css";
import { useHistory } from "react-router-dom";

const HeroBanner = ({ imageUrl, text, body, path }) => {
  //handleclick
  //take in path
  const history = useHistory();
  const handleClick = (path) => {
    console.log("clicks");
    console.log(path);
    history.push(path);
  };
  return (
    <div className="heroBanner">
      <div className="imageContainer">
        <img src={imageUrl} alt=" " />
      </div>

      <div className="bannertitle">
        <h2>{text}</h2>
      </div>

      <div className="bannerBody">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
