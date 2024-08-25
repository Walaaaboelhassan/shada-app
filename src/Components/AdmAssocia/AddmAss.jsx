import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicAddmAss from "./ArabicAddmAss";
import EnglishAddmAss from "./EnglishAddmAss";

function AddmAss() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicAddmAss /> : <EnglishAddmAss />}</div>
  );
}

export default AddmAss;
