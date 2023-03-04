import React from "react";
import RoundPlace from "../../components/round-place";
import "./Styles.FirstlyCard.css";

const FirstlyCard = () => {
  return (
    <div className="first-card">
      <h3 className="result-text">Your Result</h3>
      <RoundPlace />
      <h2 className="great-title">Great</h2>
      <p className="description-card">
        You scored higher than 65% of the people who have taken there tests
      </p>
    </div>
  );
};

export default FirstlyCard;
