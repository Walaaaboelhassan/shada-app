import React from "react";
import "./Members.css";
import "../Sections/About/About.css";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicMembers() {
  return (
    <div className="members-ass">
      <div className="members">
        <SmallTitle title={"أعضاء الجمعية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicMembers;
