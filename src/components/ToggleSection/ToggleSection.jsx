import React, { useState } from "react";
import classNames from "classnames";

import { ArrowIcon } from "../../svg";

import { ToggleSectionStyle } from "./ToggleSection.style";

function ToggleSection(props) {
  const { heading, description } = props;
  const [isSectionActive, setSectionActive] = useState(false);

  const ToggleActive = () => {
    setSectionActive(!isSectionActive);
  };

  console.log(isSectionActive);

  return (
    <ToggleSectionStyle>
      <article
        className={classNames({
          header: true,
          "background-toggle": !isSectionActive,
        })}
        onClick={ToggleActive}
      >
        <span className="icon">
          <ArrowIcon />
        </span>

        <h3 className="heading">{heading}</h3>
      </article>
      <p
        className={classNames({
          decription: true,
          "toggle-para": !isSectionActive,
        })}
      >
        {description}
      </p>
    </ToggleSectionStyle>
  );
}

export default ToggleSection;
