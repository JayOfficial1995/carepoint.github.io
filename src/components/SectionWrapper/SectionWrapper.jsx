import React from "react";

import { SectionWrapperStyle } from "./SectionWrapper.style";

function SectionWrapper(props) {
  const { heading, description, sectionClass, children } = props;

  return (
    <SectionWrapperStyle className={sectionClass}>
      <h1 className="heading">{heading}</h1>
      <p className="description">{description} </p>
      {children}
    </SectionWrapperStyle>
  );
}

export default SectionWrapper;
