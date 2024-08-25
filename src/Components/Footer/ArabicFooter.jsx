import React from "react";
import logo from "../../images/logo1.png";
import circularShape from "../../images/circular shape.png";
import linesShape from "../../images/lines shape.png";
import plusShape from "../../images/plus shape.png";
import Icons from "../socialMedia/socialMediaLinks";
import { Link } from "react-router-dom";

function ArabicFooter() {
  return (
    <div className="footer ">
      <div className="footer-top !flex !flex-row-reverse !justify-between">
        <div className="summary !w-[251px] !text-end !pr-0">
          <div className="logo">
            <Link className="flex justify-end" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            جمعية أهلية متخصصة في تقديم حلول للرياضات الجبلية و تعزيز ثقافة
            الرياضة المجتمعية بالإستفادة من المقدرات الطبيعية التي تمتاز بها
            المنطقة​
          </p>
          <div className="contact-us flex-row-reverse">
            <div className="icon !mr-0 !ml-[19px]">
              <i className="bi bi-telephone"></i>
            </div>
            <img
              className="circle !right-[0] !left-auto"
              src={circularShape}
              alt="circularShape"
            />
            <div className="contact-info-num">
              <h3>تواصل معنا</h3>
              <h4 className="number !text-[18px]">0551471042</h4>
            </div>
          </div>
        </div>
        <div className="quick-links !w-[251px] !text-end">
          <h1 className="title">روابط سريعة</h1>
          <div className="links !w-[initial] !items-end">
            <Link to="about/add-members">أعضاء المجلس الإدارة</Link>
            <Link to="/projects">مشاريع الجمعية</Link>
            <Link to="services/sponsors">الرعاة ​</Link>
            <Link to="/contact/complains">الشكاوى والمقترحات</Link>
          </div>
        </div>
        <div className="service !w-[251px] !text-end">
          <h1 className="title">خدماتنا</h1>
          <div className="links !w-[initial] !items-end">
            <Link to="#"> زيادة الوعي</Link>
            <Link to="#"> التكامل الثقافي</Link>
            <Link to="#"> تفعيل الرياضة</Link>
            <Link to="#"> السلامة والتدريب</Link>
          </div>
        </div>
        <div className="subscribe !pr-0 !text-end">
          <h1 className="title">اشترك الآن</h1>
          <form>
            <input type="text" placeholder="البريد الإلكتروني" />
            <input type="submit" value={"إبعث"} />
          </form>
          <Icons />
        </div>
      </div>
      <img className="lines" src={linesShape} alt="linesShape" />
      <img className="plus" src={plusShape} alt="plusShape" />
      <div className="footer-bottom">
        <p>حقوق النشر © 2024 محفوظة لدى جمعية شدا</p>
      </div>
    </div>
  );
}

export default ArabicFooter;
