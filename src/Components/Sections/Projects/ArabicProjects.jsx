import React, { useState } from "react";
import TopSection from "../../TopSection/TopSection";
import img1 from "../../../images/5881775159038296683.jpg";
import financial1 from "../../../images/image.png";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ArabicProjects({ showPopup, setShowPopup }) {
  return (
    <div className="projects">
      <TopSection content="" title={"مشاريع الجمعية"} />
      <SmallTitle title="مشاريع الجمعية" />
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
              <h1>مشاريع الجمعية</h1>
              <div className="about-project flex flex-col items-end">
                <h3>أعداد نادي للهايكنق داخل الأندية الرياضية</h3>
                <p className="w-[80%]"></p>
              </div>
              <div className="about-project goals !pt-0">
                <h3>أهداف المشروع</h3>
                <ol className="info">
                  <li>الوصول الى أكبر شريحة ممكنة من الممارسين</li>
                  <li>اعداد مدربين و مراقبين</li>
                  <li>نشاط مستمر في بيئة آمنه</li>
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
            أعداد نادي للهايكنق داخل الأندية الرياضية
          </motion.h3>

          <button onClick={() => setShowPopup(true)} className="btn">
            المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArabicProjects;
