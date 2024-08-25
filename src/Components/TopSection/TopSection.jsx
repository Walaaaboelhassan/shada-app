import React, { useContext, useState } from "react";
import "./TopSection.css";
import { LanguageContext } from "../../App";
import ArabicTopSection from "./ArabicTopSection";
import EnglishTopSection from "./EnglishTopSection";

function TopSection({ title, content }) {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? (
        <ArabicTopSection title={title} content={content} />
      ) : (
        <EnglishTopSection title={title} content={content} />
      )}
    </div>
  );
}

export default TopSection;
