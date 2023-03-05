import React from "react";
import InfoCard from "../../components/info-card";
import "./Styles.SecondlyCard.css";

const SecondlyCard = () => {
  return (
    <div className="secondly-card">
      <div className="secondly-inside">
        <h2 className="secondly-title">Summary</h2>
        <div>
          <InfoCard />
        </div>
        <span>button</span>
      </div>
    </div>
  );
};

export default SecondlyCard;
