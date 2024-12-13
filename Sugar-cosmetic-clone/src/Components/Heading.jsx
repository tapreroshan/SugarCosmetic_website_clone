import React from "react";
import "./ProductCard.css";

export const Heading = ({title}) => {
  return (
    
    <div className="hedtitle">
      <hr className="centereborderd me-3" />
      <div className="layouttitle">{title}</div>
      <hr className="centereborderd ms-3" />
    </div>
  )
};
