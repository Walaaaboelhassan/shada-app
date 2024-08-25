import React, { useState } from "react";
import TopSection from "../../TopSection/TopSection";
import img1 from "../../../images/5881775159038296683.jpg";
import img2 from "../../../images/5881775159038296685.jpg";
import img3 from "../../../images/5881775159038296686.jpg";
import img4 from "../../../images/5881775159038296687.jpg";
import img5 from "../../../images/5881775159038296688.jpg";
import img6 from "../../../images/5881775159038296689.jpg";
import financial1 from "../../../images/image.png";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

function EnglishProjects({ showPopup, setShowPopup }) {
  return (
    <div className="projects">
      <TopSection content="" title={"Association's Projects"} />
      <SmallTitle title="Association's Projects" />
      <div className="all-projects flex items-center justify-center flex-wrap gap-6 ">
        {showPopup && (
          <div className={`popup`}>
            <motion.div
              onClick={() => setShowPopup(false)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="cover"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, translate: "-50%" }}
              whileInView={{ scale: 1, translate: "-50%" }}
              transition={{ duration: 1 }}
              className="details shadow-lg"
            >
              <div
                className="close-btn absolute right-3 top-3 w-[50px] h-[30px] cursor-pointer z-50"
                onClick={() => setShowPopup(false)}
              >
                <IoIosCloseCircleOutline />
              </div>
              <h1>Association Projects</h1>
              <div className="about-project flex flex-col items-start">
                <h3 className="border-l-[6px] pl-[10px] !border-r-0 border-dotted">
                  Preparing a hiking club within sports clubs
                </h3>
                <p className="w-[80%]"></p>
              </div>
              <div className="about-project goals !pt-0 text-start">
                <h3 className="border-l-[6px] pl-[10px] !border-r-0 border-dotted">
                  Project objectives
                </h3>
                <ol className="info pl-[30px]">
                  <li className="after:!left-[-22px] after:!right-auto after:!border-l-[#9E9E9E] after:!border-r-[transparent]">
                    Reaching the largest possible segment of practitioners
                  </li>
                  <li className="after:!left-[-22px] after:!right-auto after:!border-l-[#9E9E9E] after:!border-r-[transparent]">
                    Preparing trainers and observers
                  </li>
                  <li className="after:!left-[-22px] after:!right-auto after:!border-l-[#9E9E9E] after:!border-r-[transparent]">
                    Continuous activity in a safe environment
                  </li>
                </ol>
              </div>
              <div className="financial my-5">
                <img
                  className="w-[80%] m-auto"
                  src={financial1}
                  alt="financial"
                />
              </div>
            </motion.div>
          </div>
        )}
        <div className="project relative">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <motion.h3
            initial={{ scale: 0, bottom: "0", translateX: "-50%" }}
            whileInView={{ scale: 1, bottom: "17px", translateX: "-50%" }}
            transition={{ duration: 0.2 }}
            className="project-name"
          >
            Preparing a hiking club within sports clubs
          </motion.h3>
          <button onClick={() => setShowPopup(true)} className="btn">
            more
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnglishProjects;
