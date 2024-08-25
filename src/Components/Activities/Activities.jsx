import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicActivities from "./ArabicActivities";
import EnglishActivities from "./EnglishActivities";

function Activities() {
  const language = useContext(LanguageContext);
  console.log(language);
  return (
    <div>
      {language === "arabic" ? <ArabicActivities /> : <EnglishActivities />}
    </div>
  );
}

export default Activities;
