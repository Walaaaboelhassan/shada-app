import React from "react";

import SmallTitle from "../src/Components/SmallTitle/SmallTitle";

function ArabicStructure() {
  return (
    <div className="structure">
      <div className="cover"></div>
      <SmallTitle title="تنظيمات هيكلية" />
      <div className="top-side">
        <h1 className="branch-title">
          فعالية مستمرة <b>&&</b> تطوير مستمر
        </h1>
        <p>
          للوصول الى المستهدفات لابد من بناء الهرم التنظيمي بشكل واضح و صريح
          لضمان الاستمرارية و عدم تداخل الأعمال و بذلك متابعة دائمة
        </p>
      </div>
      <div className="bottom-side ">
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box text-end">
              <p>التطوير المستمر</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>تطوير الأعمال</span>
            <p className="text-end">
              تطوير الأعمال للوصول الى مستهدفات جديدة وفق استراتيجية واضحة تقر
              من مجلس الإدارة وفق ما يتطلبه السوق و كذلك بما يحقق المصلحة
              المجتمعية و التجارية
            </p>
          </div>
        </div>
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box text-end">
              <p>التسويق الفعال</p>
            </div>
            <div className="box text-end">
              {" "}
              <p>المشاريع النوعية</p>
            </div>
            <div className="box text-end">
              {" "}
              <p>التواصل و الشراكات ذات الأثر</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>تفعيل العمليات التنفيذية</span>
            <p className="text-end">
              العامل التنفيذي مهم جداً في تنفيذ الخطط المقرة و التي تعمل على دفع
              العلميات الى افق بعيدة
            </p>
          </div>
        </div>
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box text-end">
              <p>تكوين مجلس الإدارة و إقرار اللوائح</p>
            </div>
            <div className="box text-end">
              {" "}
              <p>تعيين الجانب التنفيذي</p>
            </div>
            <div className="box text-end">
              <p>تكوين فريق العمل</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>الأساس</span>
            <p className="text-end">
              تكوين القاعدة و إقرار الخطط و اللوائح للوصول الى قاعدة صلبة للمضي
              الى الخطوة الأخرى
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicStructure;
