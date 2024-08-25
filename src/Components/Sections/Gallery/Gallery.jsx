import React, { useContext } from "react";
import "./Gallery.css";
import { LanguageContext } from "../../../App";
import ArabicGallery from "./ArabicGallery";
import EnglishGallery from "./EnglishGallery";

function Gallery() {
  const language = useContext(LanguageContext);
  return (
    <div>{language === "arabic" ? <ArabicGallery /> : <EnglishGallery />}</div>
  );
}

export default Gallery;
