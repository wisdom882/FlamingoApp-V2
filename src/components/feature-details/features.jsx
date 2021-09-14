import React from "react";
import features from "./featuresservice";
import "./features.css";

const Features = ({ type }) => {
  console.log(features);
  const filteredData = features[type];
  return (
    <div>
      {filteredData.map((c, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className="features">
              <div className="description left-padding">
                <h2>{c.title}</h2>
                <p className="description">{c.description}</p>
              </div>
            </div>
          ) : (
            <div className="features">
              <div className="description right-padding">
                <h2>{c.title}</h2>
                <p className="description">{c.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
