import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../../App";
import ArabicAbout from "./ArabicAbout";
import EnglishAbout from "./EnglishAbout";

function About() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicAbout /> : <EnglishAbout />}</div>
  );
}

export default About;
