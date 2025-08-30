import React from "react";

import "../components/SummaryCard.css"

const SummaryCard = (props) => {
  return (
    <div className="card">
      <p className={`card-amount ${props.textColour}`}>$ {props.amount}</p>
      <p className="card-title">{props.title}</p>
    </div>
  );
};

export default SummaryCard;
