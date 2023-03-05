import React from "react";
import "./Styles.InfoCard.css";

const InfoCard = ({ icon, title, percent, infocardClass, titleClass }) => {
  return (
    <div className={`infocard-place ${infocardClass}`}>
      <div className="infocard-left">
        {icon}
        <span className={`icon-name ${titleClass}`}>{title}</span>
      </div>
      <div className="infocard-right">
        <span className="count-p">{percent}</span>
        <span className="percent-right">/ 100</span>
      </div>
    </div>
  );
};

export default InfoCard;
