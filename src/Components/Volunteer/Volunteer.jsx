import React, { useContext } from "react";
import "./Volunteer.css";
import { LanguageContext } from "../../App";
import ArabicVolunteer from "./ArabicVolunteer";
import EnglishVolunteer from "./EnglishVolunteer";

function Volunteer() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? <ArabicVolunteer /> : <EnglishVolunteer />}
    </div>
  );
}

export default Volunteer;
