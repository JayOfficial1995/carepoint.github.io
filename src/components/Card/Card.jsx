import React from "react";

import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
import BlogCard from "./BlogCard";

function Card(props) {
  const { cardType } = props;

  switch (cardType) {
    case "horizontalCard":
      return <HorizontalCard {...props} />;

    case "verticalCard":
      return <VerticalCard {...props} />;

    default:
      return <BlogCard {...props} />;
  }
}

export default Card;
