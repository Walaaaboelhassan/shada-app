import React, { useContext, useState } from "react";
import "./TopSection.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { LanguageContext, setLanguageContext } from "../../App";

function EnglishTopSection({ title, content }) {
  const setLanguage = useContext(setLanguageContext);

  return (
    <div className="top-section overflow-hidden">
     
      <div className="above ">
        <div className="info">
          <h1 className="title">{title} </h1>
          <p>{content}</p>
        </div>
        <div className="social-media-icon">
          <motion.div
            initial={{ left: "-187px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="facebook icon-cover gap-3 bg-[#3b5998]"
          >
            <p>Follow us on Facebook</p>
            <a className="icon w-8 h-8">
              <RiFacebookCircleLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-187px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="instagram icon-cover gap-3 bg-[#125688]"
          >
            <p>Follow us on Instagram </p>
            <a className="icon w-8 h-8">
              <RiInstagramLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-187px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="X icon-cover gap-3 bg-[#55acee]"
          >
            <p>Follow us on X </p>
            <a className="icon w-8 h-8">
              <RiTwitterXFill />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-187px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="linkedin icon-cover gap-3 bg-[blue]"
          >
            <p> Follow us on Linkedin </p>
            <a className="icon w-8 h-8">
              <RiLinkedinFill />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EnglishTopSection;
