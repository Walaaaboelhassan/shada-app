import React, { useContext } from "react";
import TopSection from "../../TopSection/TopSection";
import { Outlet } from "react-router-dom";
import JoinUs from "../../JoinUs/JoinUs";

function ArabicServices() {
  return (
    <div className="services pb-10">
      <TopSection
        title={"الخدمات الإلكترونية"}
        content="نعمل من خلال المتجر الإلكتروني لتوفير جميع الاحتياجات اللازمة لممارسة الرياضات الجبلية من مصادر و ماركات عالية الجودة و بأفضل الأسعار"
      />
      <JoinUs />
      <Outlet />
    </div>
  );
}

export default ArabicServices;
