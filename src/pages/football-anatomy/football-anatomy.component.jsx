import React from "react";

import "./football-anatomy.styles.css";

import HeroBanner from "../../components/herobanner/herobanner.component";
import { useRestApi } from "../../context/restApiContext";

const FootballAnatomy = () => {
  const { user } = useRestApi();
  return (
    <div className="footballanatomy">
      <div className="position">
        <HeroBanner
          imageUrl="positions.png"
          text="Positions"
          textPosition="flex-start"
          body="the quick brown fox jumped over the lazy dog"
          path="positions"
        />
      </div>
      <div className="formation">
        <HeroBanner
          imageUrl="formation.jpg"
          text="Formations"
          textPosition="flex-end"
          body="the quick brown fox jumped over the lazy dog"
          path="/formations"
        />
      </div>
      <div className="tactics">
        <HeroBanner
          imageUrl="https://storage.googleapis.com/flamingoapp_wisdom/Tactics.jpg"
          text="Tactics"
          textPosition="flex-start"
          body="the quick brown fox jumped over the lazy dog"
          path="/tactics"
        />
      </div>
      {console.log(user)}
      {user?.isAdmin ? (
        <div className="footballForm">
          <HeroBanner
            imageUrl="https://storage.googleapis.com/flamingoapp_wisdom/blackfeminist.png"
            text="Add Football Item"
            textPosition="flex-start"
            body="the quick brown fox jumped over the lazy dog"
            path="/footballForm"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FootballAnatomy;
