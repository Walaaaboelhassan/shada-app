import React from "react";
import "./SmallTitle.css";

function SmallTitle({ title }) {
  return (
    <div className="small-title">
      <span></span>
      <span></span>
      <h1>{title}</h1>
    </div>
  );
}

export default SmallTitle;
