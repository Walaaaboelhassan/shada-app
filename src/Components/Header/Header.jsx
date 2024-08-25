import React, { useContext } from "react";
import "./Header";
import { LanguageContext } from "../../App";
import ArabicHeader from "./ArabicHeader";
import EnglishHeader from "./EnglishHeader";


function Header() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicHeader /> : <EnglishHeader />}</div>
  );
}

export default Header;
