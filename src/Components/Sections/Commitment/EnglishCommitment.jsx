import React from "react";
import SmallTitle from "../../SmallTitle/SmallTitle";
import doctor from "../../../images/doctors2.png";
import TopSection from "../../TopSection/TopSection";
import { Outlet } from "react-router-dom";

function EnglishCommitment() {
  return (
    <div className="about text-end">
      <TopSection
        title={"Governance and Compliance"}
        content="Shada Mountain Sports Association is a leading organization dedicated to promoting and developing mountain sports in the Al-Baha region. Bearing the name of the majestic Shada Mountains, the association aims to raise awareness, promote a vibrant culture of mountain sports, and activate various sporting activities that highlight the natural beauty and distinctive terrain of the Al-Baha region."
      />
      <Outlet />
    </div>
  );
}

export default EnglishCommitment;
