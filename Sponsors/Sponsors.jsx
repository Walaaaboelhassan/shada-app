import React, { useContext } from "react";
import ArabicSponsors from "./ArabicSponsors";
import EnglishSponsors from "./EnglishSponsors";
import { LanguageContext } from "../src/App";

function Sponsors() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicSponsors /> : <EnglishSponsors />}
    </div>
  );
}

export default Sponsors;
