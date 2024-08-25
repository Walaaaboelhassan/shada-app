import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicAdministrative from "./ArabicAdministrative";
import EnglishAdministrative from "./EnglishAdministrative";

function Administrative() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? (
        <ArabicAdministrative />
      ) : (
        <EnglishAdministrative />
      )}
    </div>
  );
}

export default Administrative;
