import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import SmallTitle from "../SmallTitle/SmallTitle";

function ArabicGoals() {
  return (
    <div className="goals">
      <SmallTitle title={"أهداف الجمعية​"} />
      <div className="all-goals-box flex flex-wrap justify-center items-center gap-9">
        <div className="goals-box text-end shadow-lg ">
          <div className="title">
            <h1> زيادة الوعي </h1>
          </div>
          <div className="description">
            <p>رفع الوعي العام بفوائد وإثارة الرياضات الجبلية</p>
          </div>
        </div>
        <div className="goals-box text-end shadow-lg ">
          <div className="title">
            <h1> التكامل الثقافي</h1>
          </div>
          <div className="description">
            <p>
              دمج الرياضات الجبلية في الثقافة المحلية، وجعلها جزءًا أساسيًا من
              هوية منطقة الباحة
            </p>
          </div>
        </div>
        <div className="goals-box text-end shadow-lg ">
          <div className="title">
            <h1> تفعيل الرياضة</h1>
          </div>
          <div className="description">
            <p>
              تطوير وتنظيم مجموعة متنوعة من الأنشطة الرياضية الجبلية لتشجيع
              المجتمع وجذب الهواة
            </p>
          </div>
        </div>
        <div className="goals-box text-end shadow-lg ">
          <div className="title">
            <h1> الممارسات المستدامة</h1>
          </div>
          <div className="description">
            <p>
              تعزيز الممارسات الصديقة للبيئة والمستدامة في جميع الأنشطة الرياضية
              الجبلية للحفاظ على البيئة الطبيعية
            </p>
          </div>
        </div>
        <div className="goals-box text-end shadow-lg ">
          <div className="title">
            <h1> السلامة والتدريب</h1>
          </div>
          <div className="description">
            <p>
              تقديم برامج تدريبية وورش عمل للسلامة لضمان استعداد المشاركين
              ومعرفتهم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicGoals;
