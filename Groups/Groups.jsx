import React, { useContext } from "react";
import "./Groups.css";
import { LanguageContext } from "../src/App";
import EnglishGroups from "./EnglishGroups";
import ArabicGroups from "./ArabicGroups";

function Groups() {
  const language = useContext(LanguageContext);

  return (
    <div>{language === "arabic" ? <ArabicGroups /> : <EnglishGroups />}</div>
  );
}

export default Groups;
