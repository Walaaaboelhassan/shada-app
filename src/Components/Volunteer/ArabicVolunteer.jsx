import React from "react";
import "./Volunteer.css";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicVolunteer() {
  return (
    <div className="volunteer">
      {" "}
      <div className="members">
        <SmallTitle title={"التطوع"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicVolunteer;
