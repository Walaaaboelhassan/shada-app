import React, { Component } from "react";
import TopSection from "../TopSection/TopSection";
import "./Error.css";
import { Link, useNavigate } from "react-router-dom";

function ArabicError() {
  const navigate = useNavigate();
  return (
    <div className="errorSection">
      <div className="error">
        <span>
          4 <strong></strong> 4
        </span>
        <h2>الصفحة التي كنت تبحث عنها، لا يمكن العثور عليها</h2>
        <p>
          ربما تمت إزالة الصفحة التي تبحث عنها، أو تم تغيير اسمها، أو أنها غير
          متاحة مؤقتًا
        </p>
        <div className="buttons">
          <Link onClick={() => navigate(-1)}>الرجوع</Link>
        </div>
      </div>
    </div>
  );
}

export default ArabicError;
