import React from "react";
import TopSection from "../TopSection/TopSection";
import "./Error.css";
import { Link } from "react-router-dom";

function ArabicError() {
  return (
    <div className="errorSection">
      <div className="error">
        <span>
          4 <strong></strong> 4
        </span>
        <h2>The Page you were looking for, couldn't be found.</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="buttons">
          <Link to="/">back</Link>
          <Link to="/">back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default ArabicError;
