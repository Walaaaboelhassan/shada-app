import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicError from "../Error/ArabicError";
import EnglishError from "../Error/EnglishError";

function Error() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicError /> : <EnglishError />}</div>
  );
}

export default Error;
