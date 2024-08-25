import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicJoin from "./ArabicJoin";
import EnglishJoin from "./EnglishJoin";

function JoinUs() {
  const language = useContext(LanguageContext);
  return <div>{language === "arabic" ? <ArabicJoin /> : <EnglishJoin />}</div>;
}

export default JoinUs;
