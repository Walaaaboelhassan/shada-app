import React, { useEffect } from "react";
import "./About.css";
import doctor from "../../../images/doctors2.png";
import member1 from "../../../images/person1.jpg";
import member2 from "../../../images/person2.jpg";
import member3 from "../../../images/person3.jpg";
import member4 from "../../../images/person4.jpg";
import SmallTitle from "../../SmallTitle/SmallTitle";
import TopSection from "../../TopSection/TopSection";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Activities from "../../Activities/Activities";
import Goals from "../../Goals/Goals";
import logo from "../../../images/logo.png";

function EnglishAbout() {
  return (
    <div className="about text-end">
      <TopSection
        title={"Shada Association for Mountain Sports"}
        content=" The Shada Mountain Sports Association is a leading organization dedicated to promoting and developing mountain sports in the Al-Baha region. Named after the majestic Shada Mountains, the association aims to increase awareness, foster a vibrant mountain sports culture, and activate various sports activities that highlight the natural beauty and challenging terrain of Al-Baha.​ "
      />
      <Outlet />
    </div>
  );
}

export default EnglishAbout;
