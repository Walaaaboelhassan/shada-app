import React, { useEffect } from "react";
import "./About.css";

import TopSection from "../../TopSection/TopSection";
import Activities from "../../Activities/Activities";
import Goals from "../../Goals/Goals";
import { Outlet } from "react-router-dom";

function ArabicAbout() {
  return (
    <div className="about text-end">
      <TopSection
        title={"جمعية شدا للرياضات الجبلية​"}
        content="جمعية شدا للرياضات الجبلية هي منظمة رائدة مكرسة لتعزيز وتطوير الرياضات الجبلية في منطقة الباحة. تحمل اسم جبال شدا الشامخة، تهدف الجمعية إلى زيادة الوعي، وتعزيز ثقافة حيوية للرياضات الجبلية، وتفعيل الأنشطة الرياضية المختلفة التي تبرز الجمال الطبيعي والتضاريس المميزة لمنطقة الباحة"
      />
      <Outlet />
    </div>
  );
}

export default ArabicAbout;
