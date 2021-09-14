import React from "react";
import "./unauthenticatedhome.styles.css";
import Features from "../../components/feature-details/featuresservice";

const UnAuthenticatedHome = () => {
  return (
    <div className="background">
      <div className="text">
        <h1 data-text="Football in glance.">Football in a glance</h1>
        <p className="paragraph">
          Short dive into the inner workings of football
        </p>
        <a href="/login" className="football-anatomy-button">
          Football Anatomy
        </a>
      </div>
      <Features type="homepageFeatures" />
    </div>
  );
};

export default UnAuthenticatedHome;
