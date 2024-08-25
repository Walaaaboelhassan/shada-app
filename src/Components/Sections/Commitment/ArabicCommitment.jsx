import React from "react";
import SmallTitle from "../../SmallTitle/SmallTitle";
import TopSection from "../../TopSection/TopSection";
import { Outlet } from "react-router-dom";

function ArabicCommitment() {
  return (
    <div className="about text-end">
      <TopSection
        title={"الحوكمة و الإلتزام"}
        content="جمعية شدا للرياضات الجبلية هي منظمة رائدة مكرسة لتعزيز وتطوير الرياضات الجبلية في منطقة الباحة. تحمل اسم جبال شدا الشامخة، تهدف الجمعية إلى زيادة الوعي، وتعزيز ثقافة حيوية للرياضات الجبلية، وتفعيل الأنشطة الرياضية المختلفة التي تبرز الجمال الطبيعي والتضاريس المميزة لمنطقة الباحة"
      />
      <Outlet />
    </div>
  );
}

export default ArabicCommitment;
