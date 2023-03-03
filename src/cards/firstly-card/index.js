import React from "react";
import RoundPlace from "../../components/round-place";
import "./Styles.FirstlyCard.css";

const FirstlyCard = () => {
  return (
    <div className="first-card">
      <h3 className="result-text">Your Result</h3>
      <RoundPlace />
      <h5>Greate</h5>
      <p>description</p>
    </div>
  );
};

export default FirstlyCard;
