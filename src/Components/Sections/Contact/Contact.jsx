import React, { useContext } from "react";
import "./Contact.css";
import { LanguageContext } from "../../../App";
import ArabicJoin from "./ArabicContact";
import EnglishJoin from "./EnglishContact";

function JoinUs() {
  const language = useContext(LanguageContext);
  return <>{language === "arabic" ? <ArabicJoin /> : <EnglishJoin />}</>;
}

export default JoinUs;
