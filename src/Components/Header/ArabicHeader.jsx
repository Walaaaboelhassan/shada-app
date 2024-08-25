import React, { useContext, useState } from "react";
import "./Header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo1.png";
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { setLanguageContext } from "../../App";

function ArabicHeader() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [id, setId] = useState(null);

  const setLanguage = useContext(setLanguageContext);

  const setLocalStorageValue = (e) => {
    const set = localStorage.setItem("language", e.target.value);
  };

  const setFunctions = (e) => {
    setLocalStorageValue(e);
    setLanguage(e.target.value);
  };

  const getLocalStorageValue = () => {
    const currentLanguage = localStorage.getItem("language");
    setLanguage(currentLanguage);
  };

  window.onload = () => {
    getLocalStorageValue();
  };

  const sideBarFunction = (idx) => {
    setId(idx);
    setActive(!active);
  };

  return (
    <div className="fixed header">
      <select
        onChange={(e) => setFunctions(e)}
        className="language fixed p-2 top-[52px] left-[100px] outline-none z-[999999] bg-[white] rounded-lg text-[black]"
      >
        <option value="arabic">Arabic</option>
        <option value="english">English</option>
      </select>
      <div className="inner-header flex items-center justify-right flex-row-reverse">
        <div className="logo">
          <img className="" src={logo} alt="logo" />
        </div>
        <ul className="list flex flex-row-reverse gap-2">
          <li
            onMouseEnter={(() => setHover(true), () => setId(0))}
            onMouseLeave={(() => setHover(false), () => setId(null))}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("about") ? "!text-[black]" : ""
              }`}
            >
              عن الجمعية
              {id === 0 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="about/goals"
                  className={`${
                    location.pathname.includes("goals") ? "active" : ""
                  }`}
                >
                  {" "}
                  أهداف الجمعية
                </Link>
                <Link
                  to="about/activities"
                  className={`${
                    location.pathname.includes("activities") ? "active" : ""
                  }`}
                >
                  {" "}
                  أنشطة الجمعية
                </Link>
                <Link
                  to="about/add-members"
                  className={`${
                    location.pathname.includes("add-members") ? "active" : ""
                  }`}
                >
                  {" "}
                  أعضاء المجلس الإدارة
                </Link>
                <Link
                  to="about/executive"
                  className={`${
                    location.pathname.includes("executive") ? "active" : ""
                  }`}
                >
                  {" "}
                  الفريق التنفيذي
                </Link>
                <Link
                  to="about/members"
                  className={`${
                    location.pathname.includes("/members") ? "active" : ""
                  }`}
                >
                  {" "}
                  أعضاء الجمعية
                </Link>
                <Link
                  to="about/administrative"
                  className={`${
                    location.pathname.includes("administrative") ? "active" : ""
                  }`}
                >
                  {" "}
                  الهيكل الإداري للجمعية
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="gallery"
              className={`${
                location.pathname.includes("gallery") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              وسائط الجمعية
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className={`${
                location.pathname.includes("projects") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              مشاريع الجمعية
            </Link>
          </li>
          <li
            onMouseEnter={(() => setHover(true), () => setId(1))}
            onMouseLeave={(() => setHover(false), () => setId(null))}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("commitment") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الحوكمة و اإللتزام{" "}
              {id === 1 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="commitment/parallel-list"
                  className={`${
                    location.pathname.includes("parallel-list") ? "active" : ""
                  }`}
                >
                  الموازنة المالية{" "}
                </Link>
                <Link
                  to="commitment/financial-list"
                  className={`${
                    location.pathname.includes("financial-list") ? "active" : ""
                  }`}
                >
                  {" "}
                  القوائم المالية
                </Link>
                <Link
                  to="commitment/future-plan"
                  className={`${
                    location.pathname.includes("future-plan") ? "active" : ""
                  }`}
                >
                  {" "}
                  الخطة المستقبلية
                </Link>
                <Link
                  to="commitment/criteria"
                  className={`${
                    location.pathname.includes("criteria") ? "active" : ""
                  }`}
                >
                  معيار الحوكمة و الإلتزام
                </Link>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={(() => setHover(true), () => setId(2))}
            onMouseLeave={(() => setHover(false), () => setId(null))}
          >
            <Link
              to="services"
              className={`${
                location.pathname.includes("services") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الخدمات اإللكترونية{" "}
              {id === 2 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="services/sponsors"
                  className={`${
                    location.pathname.includes("sponsors") ? "active" : ""
                  }`}
                >
                  {" "}
                  الرعاة
                </Link>
                <Link
                  to="services/memberships"
                  className={`${
                    location.pathname.includes("memberships") ? "active" : ""
                  }`}
                >
                  {" "}
                  العضويات
                </Link>
                <Link
                  to="services/products"
                  className={`${
                    location.pathname.includes("products") ? "active" : ""
                  }`}
                >
                  {" "}
                  المنتوجات
                </Link>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={(() => setHover(true), () => setId(3))}
            onMouseLeave={(() => setHover(false), () => setId(null))}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("contact") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              تواصل معنا​ {id === 3 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="contact/complains"
                  className={`${
                    location.pathname.includes("complains") ? "active" : ""
                  }`}
                >
                  {" "}
                  المقترحات و الشكاوى
                </Link>
                <Link
                  to="contact/hiring"
                  className={`${
                    location.pathname.includes("hiring") ? "active" : ""
                  }`}
                >
                  {" "}
                  التوظيف
                </Link>
                <Link
                  to="contact/volunteer"
                  className={`${
                    location.pathname.includes("volunteer") ? "active" : ""
                  }`}
                >
                  {" "}
                  التطوع
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <div
          onClick={() => setShowNavbar(!showNavbar)}
          className="sidebar-icon w-10 h-10"
        >
          <span className="w-10 h-10 block cursor-pointer">
            {showNavbar ? <IoClose /> : <IoReorderThreeOutline />}
          </span>
        </div>
      </div>
      <div
        className={`side-bar-header ${
          showNavbar
            ? "opacity-100 duration-1000 overflow-hidden"
            : "opacity-0 h-0 duration-1000 overflow-hidden"
        }`}
      >
        <ul className="list flex flex-row-reverse gap-6">
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => sideBarFunction(0)}
            className={`${id === 0 && active ? "active" : ""}`}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("about") ? "!text-[black]" : ""
              }`}
            >
              عن الجمعية
              {id === 0 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="about/goals"
                  className={`${
                    location.pathname.includes("goals") ? "active" : ""
                  }`}
                >
                  {" "}
                  أهداف الجمعية
                </Link>
                <Link
                  to="about/activities"
                  className={`${
                    location.pathname.includes("activities") ? "active" : ""
                  }`}
                >
                  {" "}
                  أنشطة الجمعية
                </Link>
                <Link
                  to="about/add-members"
                  className={`${
                    location.pathname.includes("add-members") ? "active" : ""
                  }`}
                >
                  {" "}
                  أعضاء المجلس الإدارة
                </Link>
                <Link
                  to="about/executive"
                  className={`${
                    location.pathname.includes("executive") ? "active" : ""
                  }`}
                >
                  {" "}
                  الفريق التنفيذي
                </Link>
                <Link
                  to="about/members"
                  className={`${
                    location.pathname.includes("/members") ? "active" : ""
                  }`}
                >
                  {" "}
                  أعضاء الجمعية
                </Link>
                <Link
                  to="about/administrative"
                  className={`${
                    location.pathname.includes("administrative") ? "active" : ""
                  }`}
                >
                  {" "}
                  الهيكل الإداري للجمعية
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${active ? "active" : ""}`}
          >
            <Link
              to="gallery"
              className={`${
                location.pathname.includes("gallery") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              وسائط الجمعية
            </Link>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${active ? "active" : ""}`}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("projects") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              مشاريع الجمعية
            </Link>
          </li>
          <li
            onClick={() => sideBarFunction(1)}
            className={`${id === 1 && active ? "active" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("commitment") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الحوكمة و اإللتزام{" "}
              {id === 1 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="commitment/parallel-list"
                  className={`${
                    location.pathname.includes("parallel-list") ? "active" : ""
                  }`}
                >
                  الموازنة المالية{" "}
                </Link>
                <Link
                  to="commitment/financial-list"
                  className={`${
                    location.pathname.includes("financial-list") ? "active" : ""
                  }`}
                >
                  {" "}
                  القوائم المالية
                </Link>
                <Link
                  to="commitment/future-plan"
                  className={`${
                    location.pathname.includes("future-plan") ? "active" : ""
                  }`}
                >
                  {" "}
                  الخطة المستقبلية
                </Link>
                <Link
                  to="commitment/criteria"
                  className={`${
                    location.pathname.includes("criteria") ? "active" : ""
                  }`}
                >
                  معيار الحوكمة و الإلتزام
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => sideBarFunction(2)}
            className={`${id === 2 && active ? "active" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="services"
              className={`${
                location.pathname.includes("services") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الخدمات اإللكترونية{" "}
              {id === 2 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="services/sponsors"
                  className={`${
                    location.pathname.includes("sponsors") ? "active" : ""
                  }`}
                >
                  {" "}
                  الرعاة
                </Link>
                <Link
                  to="services/memberships"
                  className={`${
                    location.pathname.includes("memberships") ? "active" : ""
                  }`}
                >
                  {" "}
                  العضويات
                </Link>
                <Link
                  to="services/products"
                  className={`${
                    location.pathname.includes("products") ? "active" : ""
                  }`}
                >
                  {" "}
                  المنتوجات
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => sideBarFunction(3)}
            className={`${id === 3 && active ? "active" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("contact") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              تواصل معنا​ {id === 3 ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="contact/complains"
                  className={`${
                    location.pathname.includes("complains") ? "active" : ""
                  }`}
                >
                  {" "}
                  المقترحات و الشكاوى
                </Link>
                <Link
                  to="contact/hiring"
                  className={`${
                    location.pathname.includes("hiring") ? "active" : ""
                  }`}
                >
                  {" "}
                  التوظيف
                </Link>
                <Link
                  to="contact/volunteer"
                  className={`${
                    location.pathname.includes("volunteer") ? "active" : ""
                  }`}
                >
                  {" "}
                  التطوع
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArabicHeader;
