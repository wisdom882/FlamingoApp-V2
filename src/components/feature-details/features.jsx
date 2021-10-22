import React from "react";
import features from "./featuresservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./features.css";

const Features = ({ type }) => {
  console.log(features);
  const filteredData = features[type];
  return (
    <div className="flex">
      {filteredData.map((c, index) => (
        <div className="features">
          <div className="description right-padding">
            <h2>{c.title}</h2>
            <p className="featurecontent">{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
