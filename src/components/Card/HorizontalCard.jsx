import React from "react";

import { HorizontalCardStyle } from "./Card.style";

function HorizontalCard(props) {
  const { icon, heading, description, cardClass } = props;
  return (
    <HorizontalCardStyle className={cardClass}>
      <span className="card-icon-wrapper">{icon}</span>

      <figcaption className="card-details">
        <h3 className="heading">{heading}</h3>
        <p className="description">{description}</p>
      </figcaption>
    </HorizontalCardStyle>
  );
}

export default HorizontalCard;
