import React from "react";
import "./skillCard.css";

function SkillCard({ skillName, skillValue }) {
  return (
    <div className="skill-card">
      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>
              {skillValue}
              <span>%</span>
            </h2>
          </div>
        </div>
        <h2 className="text">{skillName}</h2>
      </div>
    </div>
  );
}

export default SkillCard;
