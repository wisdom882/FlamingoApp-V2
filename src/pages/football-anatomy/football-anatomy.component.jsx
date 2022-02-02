import React from "react";

import "./football-anatomy.styles.css";

import HeroBanner from "../../components/herobanner/herobanner.component";
import { useRestApi } from "../../context/restApiContext";

const FootballAnatomy = () => {
  const { user } = useRestApi();
  return (
    <div>
      <div className="footballanatomy">
        <div className="position">
          <HeroBanner
            imageUrl="positions.png"
            title="Positions"
            text="Areas on the football field the players cover or play"
            path="positions"
          />
        </div>
        <div className="formation">
          <HeroBanner
            imageUrl="formation.jpg"
            title="Formations"
            text="The formation describes how the players in a team generally 
          position themselves on the pitch"
            path="/formations"
          />
        </div>
        <div className="tactics">
          <HeroBanner
            imageUrl="https://storage.googleapis.com/flamingoapp_wisdom/Tactics.jpg"
            title="Tactics"
            text="Soccer tactics range from the way a player stands or moves, to the pace, 
            style, positioning and movement of the entire team"
            path="/tactics"
          />
        </div>
        {console.log(user)}
        {user?.isAdmin ? (
          <div className="footballForm">
            <HeroBanner
              imageUrl="https://storage.googleapis.com/flamingoapp_wisdom/blackfeminist.png"
              title="Add Football Item"
              text="the quick brown fox jumped over the lazy dog"
              path="/footballForm"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default FootballAnatomy;
