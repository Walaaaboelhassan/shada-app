import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import logo from "../../images/logo.png";

function ArabicMemberships() {
  return (
    <div className="memberships">
      <SmallTitle title={"عضويات الجمعية"} />
      <div className="membership-tiers my-10 flex flex-wrap items-center justify-center gap-6">
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">مستكشف</h2>
          <p className="para">
            الذين شاركوا في نشاطين على الأقل وحضروا ورشة عمل واحدة. يشمل الوصول
            إلى جلسات التدريب الأساسية والفعاليات.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">مغامر</h2>
          <p className="para">
            للأعضاء الذين شاركوا في خمسة أنشطة على الأقل وتفاعلوا مع منشورات
            الجمعية على وسائل التواصل الاجتماعي 50 مرة. يشمل الوصول إلى برامج
            التدريب المتقدمة وخصومات على البضائع.
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> متسلق جبال</h2>
          <p className="para">
            الذين شاركوا في عشرة أنشطة وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 100 مرة. يشمل الوصول الحصري إلى الفعاليات
            المتقدمة، برامج التدريب المتقدمة، والبضائع الخاصة.
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> متسلق جبال مميز</h2>
          <p className="para">
            الذين شاركوا في عشرين نشاطًا وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 200 مرة. يشمل جميع مزايا متسلق الجبال بالإضافة إلى
            وصول VIP لجميع الفعاليات، جلسات تدريب شخصية، وبضائع حصرية.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> عضو مدى الحياة ​</h2>
          <p className="para">
            الذين شاركوا في ثلاثين نشاطًا وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 300 مرة. رسوم عضوية لمرة واحدة تمنح وصولًا مدى
            الحياة لجميع فوائد وفعاليات الجمعية، مع تكريم خاص كداعم رئيسي لجمعية
            شدا للرياضات الجبلية.​
          </p>
        </div>
      </div>
      <div className="memberships flex items-center justify-center flex-wrap gap-8 gap-y-[170px]">
        <div className="box shadow-2xl relative ">
          <div className="name  ">
            <h3 className="">عضوية عادية ​</h3>
          </div>
          <div className="price">
            <span data-currency="ريال​" className="">
              200
            </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​</li>
            <li className="feature"> الاستفادة من برامج الجمعية​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className=""> عضوية محترف​</h3>
          </div>
          <div className="price">
            <span data-currency="ريال​" className="">
              300{" "}
            </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​ </li>
            <li className="feature"> الإستفادة من برامج الجمعية​ </li>
            <li className="feature"> خصم على فعاليات الجمعية 20%​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className="">عضوية مميزة​</h3>
          </div>
          <div className="price">
            <span data-currency="ريال​" className="">
              500{" "}
            </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​ </li>
            <li className="feature"> الإستفادة من برامج الجمعية​ </li>
            <li className="feature"> خصم على فعاليات الجمعية 25%​ </li>
            <li className="feature"> هدايا من الجمعية​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className="">عضوية فخرية ( بشروط و قيود ) ​ ​</h3>
          </div>
          <div className="price">
            <span data-currency="ريال​" className="">
              10.000​
            </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة في الجمعية العامة​</li>
            <li className="feature">
              تمنع للداعمين و الفئات التي يختارها مجلس الإدارة
            </li>
            <li className="feature"> هدايا راقيه من الجمعية​</li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicMemberships;
