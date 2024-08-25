import React, { useContext, useState } from "react";
import "./Projects.css";
import TopSection from "../../TopSection/TopSection";
import img1 from "../../../images/5881775159038296683.jpg";
import img2 from "../../../images/5881775159038296685.jpg";
import img3 from "../../../images/5881775159038296686.jpg";
import img4 from "../../../images/5881775159038296687.jpg";
import img5 from "../../../images/5881775159038296688.jpg";
import img6 from "../../../images/5881775159038296689.jpg";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../App";
import ArabicProjects from "./ArabicProjects";
import EnglishProjects from "./EnglishProjects";

function Projects() {
  const [showPopup, setShowPopup] = useState(false);
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? (
        <ArabicProjects showPopup={showPopup} setShowPopup={setShowPopup} />
      ) : (
        <EnglishProjects showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      ;
    </div>
  );
}

export default Projects;
