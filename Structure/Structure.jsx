import React, { useContext } from "react";
import "./Structure.css";
import { LanguageContext } from "../src/App";
import ArabicStructure from "./ArabicStructure";
import EnglishStructure from "./EnglishStructure";

function Structure() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicStructure /> : <EnglishStructure />}
    </div>
  );
}

export default Structure;
