import React from "react";
import "./football-details.styles.css";
import footballDetailsData from "./football-details.service";

const FootballDetails = ({ detailsType }) => {
  console.log(footballDetailsData);
  const filteredData = footballDetailsData[detailsType];
  return (
    <div>
      {filteredData.map((c, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className="football">
              <div className="description left-padding">
                <h2>{c.title}</h2>
                <p className="paragraph">{c.description}</p>
              </div>
              <div className="picture">
                <img
                  src={c.imageUrl}
                  alt="tactics"
                  width="400"
                  height="250"
                  className="img"
                ></img>
              </div>
            </div>
          ) : (
            <div className="football">
              <div className="picture">
                <img
                  src={c.imageUrl}
                  alt="tactics"
                  width="400"
                  height="250"
                  className="img"
                ></img>
              </div>
              <div className="description right-padding">
                <h2>{c.title}</h2>
                <p className="paragraph">{c.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FootballDetails;
