import React from "react";
import "./Future.css";
import "../Sections/Commitment/Commitment.css";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicFuture() {
  return (
    <div className="future">
      <div className="members">
        <SmallTitle title={"الخطة المستقبلية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicFuture;
