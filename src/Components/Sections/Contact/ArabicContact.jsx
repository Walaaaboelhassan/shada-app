import React from "react";
import { Outlet } from "react-router-dom";
import TopSection from "../../TopSection/TopSection";

function ArabicJoin() {
  return (
    <div>
      <TopSection
        title={"تواصل معنا​"}
        content="لمزيد من المعلومات، تفاصيل العضوية، أو فرص الرعاية، يرجى التواصل
            معنا عبر موقعنا الإلكتروني أو قنوات التواصل الاجتماعي. لنصل إلى آفاق
            جديدة معًا مع جمعية شدا للرياضات الجبلية"
      />
      <Outlet />
    </div>
  );
}

export default ArabicJoin;
