import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import "../Sections/Commitment/Commitment.css";

function ArabicFinancialList() {
  return (
    <div className="financial-list">
      <div className="members">
        <SmallTitle title={"القوائم المالية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicFinancialList;
