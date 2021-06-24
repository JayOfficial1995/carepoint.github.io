import React from "react";

import { VerticlalCardStyle } from "./Card.style";

function VerticalCard(props) {
  const { icon, heading, description, cardClass } = props;
  return (
    <VerticlalCardStyle className={cardClass}>
      <article className="card-header">
        {icon && <span className="card-icon">{icon}</span>}

        <h2 className="heading">{heading}</h2>
      </article>
      <p className="card-description">{description}</p>
    </VerticlalCardStyle>
  );
}

export default VerticalCard;
