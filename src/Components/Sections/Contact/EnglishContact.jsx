import React from "react";
import mount from "../../../images/5881775159038296685.jpg";
import Icons from "../../socialMedia/socialMediaLinks";
import { motion } from "framer-motion";
import SmallTitle from "../../SmallTitle/SmallTitle";
import TopSection from "../../TopSection/TopSection";
import { Outlet } from "react-router-dom";

function EnglishJoin() {
  return (
    <div className="">
      <TopSection
        title={"Contact Us"}
        content="For more information, membership details, or sponsorship opportunities, please contact
us via our website or social media channels. Let's reach new horizons together with Shada Mountain Sports Association"
      />
      <Outlet />
    </div>
  );
}

export default EnglishJoin;
