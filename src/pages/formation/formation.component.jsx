import React from "react";

import "./formation.styles.css";

import FootballDetails from "../../components/football-details/football-details.component";

const formations = () => {
  return (
    <div>
      <FootballDetails detailsType="formation" />
    </div>
  );
};

export default formations;
