import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import "../Sections/Services/Services.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import "./Products.css";

function ArabicProducts() {
  return (
    <div className="products">
      <SmallTitle title={"منتجات الجمعية​ ​"} />
      <div className="all-products-box flex flex-wrap justify-center items-center gap-9">
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> البضائع</h1>
          </div>
          <div className="description">
            <p>
              ملابس وأدوات وإكسسوارات تحمل العلامة التجارية للجمعية لعشاق
              الرياضات الجبلية
            </p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> الجولات الإرشادية</h1>
          </div>
          <div className="description">
            <p>جولات إرشادية احترافية في جبال شدا للمجموعات والأفرا</p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1>برامج التدريب</h1>
          </div>
          <div className="description">
            <p>برامج تدريبية شاملة لمختلف الرياضات الجبلية</p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> حزم الفعاليات</h1>
          </div>
          <div className="description">
            <p>
              حزم مخصصة للفعاليات، بما في ذلك أنشطة بناء الفرق للشركات ورحلات
              المدارس
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicProducts;
