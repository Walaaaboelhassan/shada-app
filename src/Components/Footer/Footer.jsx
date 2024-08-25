import React, { useContext } from "react";
import "./Footer.css";

import ArabicFooter from "./ArabicFooter";
import EnglishFooter from "./EnglishFooter";
import { LanguageContext } from "../../App";

const Footer = () => {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicFooter /> : <EnglishFooter />}</div>
  );
};

export default Footer;
