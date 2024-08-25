import React from "react";
import firstGroup from "../../images/first.png";
import secondGroup from "../../images/second.png";
import thirdGroup from "../../images/third.png";
import fourthGroup from "../../images/fourth.png";
import SmallTitle from "../src/Components/SmallTitle/SmallTitle";
import thumpsUp from "../../images/thumps up.png";

function ArabicGroups() {
  return (
    <div className="groups">
      <SmallTitle title={"اشراك الاندية الرياضية"} />
      <div className="images flex items-center justify-center ">
        <img src={firstGroup} alt="group" />
        <img src={secondGroup} alt="group" />
        <img src={thirdGroup} alt="group" />
        <img src={fourthGroup} alt="group" />
      </div>
      <div className="two-sides flex items-center justify-evenly gap-8">
        <div className="why">
          <h1>اشراك الاندية الرياضية</h1>
          <p>
            لابد من اشراك الإندية الرياضية و فتح نشاطات في مواقعها و الترويج لها
            لسهولة وصول المتدربين ، و تعزيز دور المدربين بهذا القطاع
          </p>
        </div>
        <ul className="continue">
          <li>
            {" "}
            <img src={thumpsUp} alt="thump up" />
            تعزيز العلاقة مع الجمهور
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />
            بيئة مناسبه لتطوير المدربين
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />
            بيئة تأهيل للمدربين
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />
            تواصل أكبر مع المجتمع المحلي <br />( فعاليات / استثمار )
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArabicGroups;
