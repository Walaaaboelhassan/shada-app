import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicExecutive from "./ArabicExecutive";
import EnglishExecutive from "./EnglishExecutive";

function Executive() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicExecutive /> : <EnglishExecutive />}
    </div>
  );
}

export default Executive;
