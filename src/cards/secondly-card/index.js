import React from "react";
import { GiElectric } from "react-icons/gi";
import { BiBrain, BiMessageRoundedMinus } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";
import InfoCard from "../../components/info-card";

import "./Styles.SecondlyCard.css";

const SecondlyCard = () => {
  const Cards = [
    {
      icon: <GiElectric size={22} color={"#dd7478"} />,
      title: "Reaction",
      percent: 80,
      class: "card1",
      titleClass: "card1-title",
    },
    {
      icon: <BiBrain size={22} color={"#dfb660"} />,
      title: "Memory",
      percent: 92,
      class: "card2",
      titleClass: "card2-title",
    },
    {
      icon: <BiMessageRoundedMinus size={22} color={"#65b7a8"} />,
      title: "Verbal",
      percent: 60,
      class: "card3",
      titleClass: "card3-title",
    },
    {
      icon: <HiOutlineEye size={22} color={"#4448af"} />,
      title: "Visual",
      percent: 72,
      class: "card4",
      titleClass: "card4-title",
    },
  ];

  return (
    <div className="secondly-card">
      <div className="secondly-inside">
        <h2 className="secondly-title">Summary</h2>
        <div className="secondly-center">
          {Cards.map((item) => (
            <InfoCard
              infocardClass={item.class}
              titleClass={item.titleClass}
              icon={item.icon}
              title={item.title}
              percent={item.percent}
            />
          ))}
        </div>
        <span className="secondly-button">button</span>
      </div>
    </div>
  );
};

export default SecondlyCard;
