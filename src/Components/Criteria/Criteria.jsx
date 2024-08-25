import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicCriteria from "./ArabicCriteria";
import EnglishCriteria from "./EnglishCriteria";

function Criteria() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicCriteria /> : <EnglishCriteria />}
    </div>
  );
}

export default Criteria;
