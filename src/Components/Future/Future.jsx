import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicFuture from "./ArabicFuture";
import EnglishFuture from "./EnglishFuture";

function Future() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicFuture /> : <EnglishFuture />}</div>
  );
}

export default Future;
