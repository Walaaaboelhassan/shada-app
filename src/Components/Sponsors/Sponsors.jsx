import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicSponsors from "./ArabicSponsors";
import EnglishSponsors from "./EnglishSponsors";

function Sponsors() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicSponsors /> : <EnglishSponsors />}
    </div>
  );
}

export default Sponsors;
