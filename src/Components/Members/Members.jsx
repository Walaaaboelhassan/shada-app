import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicMembers from "./ArabicMembers";
import EnglishMembers from "./EnglishMembers";

function Members() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicMembers /> : <EnglishMembers />}</div>
  );
}

export default Members;
