import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicHiring from "./ArabicHiring";
import EnglishHiring from "./EnglishHiring";

function Hiring() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicHiring /> : <EnglishHiring />}</div>
  );
}

export default Hiring;
