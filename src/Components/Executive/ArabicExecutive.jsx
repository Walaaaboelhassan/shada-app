import React from "react";
import "./Executive.css";
import "../Sections/About/About.css";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicExecutive() {
  return (
    <div className="executive">
      <div className="members">
        <SmallTitle title={"الفريق التنفيذي"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicExecutive;
