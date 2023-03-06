import React from "react";
import { Card as DumbCard } from "antd";

const Card = ({ children }) => {
  const customizedCardStyle = {
    backgroundColor: "#f0f2f5",
    borderRadius: "8px",
    padding: "24px"
  };

  return <DumbCard style={customizedCardStyle}>{children}</DumbCard>;
};

export default Card;
