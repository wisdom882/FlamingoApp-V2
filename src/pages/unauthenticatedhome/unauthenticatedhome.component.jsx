import React from "react";
import "./unauthenticatedhome.styles.css";
import { useHistory } from "react-router-dom";
import { useRestApi } from "../../context/restApiContext";

const UnAuthenticatedHome = () => {
  // const HandleClick = () => {
  //   const history = useHistory();
  //   ///history.push("/login");
  // };
  return (
    <div className="background">
      <div className="text">
        <h1 data-text="Football in glance.">Football in a glance</h1>
        <p className="paragraph">
          Short dive into the inner workings of football
        </p>
        <button className="button">Football Anatomy</button>
      </div>
    </div>
  );
};

export default UnAuthenticatedHome;
