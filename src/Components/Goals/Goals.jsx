import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicGoals from "./ArabicGoals";
import EnglishGoals from "./EnglishGoals";
import "./Goals.css";

function Goals() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicGoals /> : <EnglishGoals />}</div>
  );
}

export default Goals;
