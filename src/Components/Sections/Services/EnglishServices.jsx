import React, { useContext } from "react";
import TopSection from "../../TopSection/TopSection";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { motion } from "framer-motion";
import JoinUs from "../../JoinUs/JoinUs";
import { Outlet } from "react-router-dom";

function EnglishServices() {
  return (
    <div className="services pb-10">
      <TopSection
        title={"Electronic services"}
        content="We work through the online store to provide all the necessary needs for practicing mountain sports from high-quality sources and brands at the best prices"
      />
      <JoinUs />
      <Outlet />
    </div>
  );
}

export default EnglishServices;
