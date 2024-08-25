import React, { useContext } from "react";
import "./Services.css";

import { LanguageContext } from "../../../App";
import ArabicServices from "./ArabicServices";
import EnglishServices from "./EnglishServices";

function Services() {
  const language = useContext(LanguageContext);

  return (
    <div>
      {language === "arabic" ? <ArabicServices /> : <EnglishServices />}
    </div>
  );
}

export default Services;
