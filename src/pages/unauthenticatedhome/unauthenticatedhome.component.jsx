import React from "react";

import "./unauthenticatedhome.styles.css";

import HeroBanner from "../../components/herobanner/herobanner.component";

const UnAuthenticatedHome = () => {
  return (
    <div>
      <div className="text">
        <h1 data-text="Football in glance.">Football in a glance</h1>
      </div>
      <div className="unAuthHome">
        <HeroBanner
          imageUrl="Games.jpg"
          text="Football Anatomy"
          textPosition="flex-end"
          gridNumber="1"
          path="/login"
        />
      </div>
    </div>
  );
};

export default UnAuthenticatedHome;
