import React, { useContext } from "react";
import "./Commitment.css";
import "../About/About.css";
import { LanguageContext } from "../../../App";
import ArabicCommitment from "./ArabicCommitment";
import EnglishCommitment from "./EnglishCommitment";

function Commitment() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicCommitment /> : <EnglishCommitment />}
    </div>
  );
}

export default Commitment;
