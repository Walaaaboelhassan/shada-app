import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicComplains from "./ArabicComplains";
import EnglishComplains from "./EnglishComplains";

function Complains() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicComplains /> : <EnglishComplains />}
    </div>
  );
}

export default Complains;
