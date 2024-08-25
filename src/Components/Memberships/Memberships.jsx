import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicMemberships from "./ArabicMemberships";
import EnglishMemberships from "./EnglishMemberships";

function Memberships() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicMemberships /> : <EnglishMemberships />}
    </div>
  );
}

export default Memberships;
