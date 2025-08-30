import React from "react";

import "../components/SummaryCard.css"

const SummaryCard = (props) => {
  return (
    <div className="summary-card">
      <p className={`amount ${props.textColour}`}>$ {props.amount}</p>
      <p className="title">{props.title}</p>
    </div>
  );
};

export default SummaryCard;
