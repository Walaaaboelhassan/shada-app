import React, { useContext, useState } from "react";
import "./Header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo1.png";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { setLanguageContext } from "../../App";

function EnglishHeader() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
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

  return (
    <div className="fixed header">
      <select
        onChange={(e) => setFunctions(e)}
        className="language fixed top-[52px] right-[100px] p-2 outline-none z-[999999]  bg-[white] rounded-lg text-[black]"
      >
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
      </select>
      <div className="inner-header flex items-center justify-left ">
        <div className="logo">
          <img className="" src={logo} alt="logo" />
        </div>
        <ul className="list flex gap-2">
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <Link
              to="#"
              className={`${
                location.pathname.includes("about")
                  ? "!text-[black] !flex-row"
                  : "!flex-row"
              }`}
            >
              {" "}
              About {hover ? <HiChevronUp /> : <HiChevronDown />}{" "}
            </Link>{" "}
            <div className="nested-list">
              {" "}
              <div className="links !items-end">
                {" "}
                <Link
                  to="about/goals"
                  className={`${
                    location.pathname.includes("goals")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Objectives
                </Link>
                <Link
                  to="about/activities"
                  className={`${
                    location.pathname.includes("activities")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Association Activities
                </Link>
                <Link
                  to="about/add-members"
                  className={`${
                    location.pathname.includes("add-members")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Board Members
                </Link>
                <Link
                  to="about/executive"
                  className={`${
                    location.pathname.includes("executive")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  } `}
                >
                  {" "}
                  Executive Team
                </Link>
                <Link
                  to="about/members"
                  className={`${
                    location.pathname.includes("/members")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Association Members
                </Link>
                <Link
                  to="about/administrative"
                  className={`${
                    location.pathname.includes("administrative")
                      ? " !text-start !justify-end  active"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  structure of the association
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="gallery"
              className={`${
                location.pathname.includes("gallery")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Gallery
            </Link>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
          >
            <Link
              to="projects"
              className={`${
                location.pathname.includes("projects")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Projects
            </Link>
          </li>
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <Link
              to="#"
              className={`${
                location.pathname.includes("commitment")
                  ? "!text-[black] !flex-row"
                  : "!flex-row"
              }`}
            >
              {" "}
              Governance and Compliance{" "}
              {hover ? <HiChevronUp /> : <HiChevronDown />}{" "}
            </Link>{" "}
            <div className="nested-list">
              {" "}
              <div className="links !items-end">
                {" "}
                <Link
                  to="commitment/parallel-list"
                  className={`${
                    location.pathname.includes("parallel-list")
                      ? " !text-start !justify-end active"
                      : " !text-start !justify-end"
                  }`}
                >
                  Financial Budget{" "}
                </Link>
                <Link
                  to="commitment/financial-list"
                  className={`${
                    location.pathname.includes("financial-list")
                      ? " !text-start !justify-end active"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Financial Statements
                </Link>
                <Link
                  to="commitment/future-plan"
                  className={`${
                    location.pathname.includes("future-plan")
                      ? " !text-start !justify-end active"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Future Plan
                </Link>
                <Link
                  to="commitment/criteria"
                  className={`${
                    location.pathname.includes("criteria")
                      ? " !text-start !justify-end active"
                      : " !text-start !justify-end"
                  }`}
                >
                  Governance and Compliance Standard
                </Link>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <Link
              to="services"
              className={`${
                location.pathname.includes("services")
                  ? "!text-[black] !flex-row"
                  : "!flex-row"
              }`}
            >
              {" "}
              Electronic services {hover ? (
                <HiChevronUp />
              ) : (
                <HiChevronDown />
              )}{" "}
            </Link>{" "}
            <div className="nested-list">
              {" "}
              <div className="links !items-end">
                {" "}
                <Link
                  to="services/sponsors"
                  className={`${
                    location.pathname.includes("sponsors")
                      ? "active !text-start !justify-end"
                      : "!text-start !justify-end"
                  }`}
                >
                  {" "}
                  Sponsors{" "}
                </Link>{" "}
                <Link
                  to="services/memberships"
                  className={`${
                    location.pathname.includes("memberships")
                      ? "active !text-start !justify-end"
                      : "!text-start !justify-end"
                  }`}
                >
                  {" "}
                  Memberships{" "}
                </Link>{" "}
                <Link
                  to="services/products"
                  className={`${
                    location.pathname.includes("products")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Products{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </li>
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <Link
              to="#"
              className={`${
                location.pathname.includes("contact")
                  ? "!text-[black] !flex-row"
                  : "!flex-row"
              }`}
            >
              {" "}
              Contact us​ {hover ? <HiChevronUp /> : <HiChevronDown />}{" "}
            </Link>{" "}
            <div className="nested-list">
              {" "}
              <div className="links !items-end">
                {" "}
                <Link
                  to="contact/complains"
                  className={`${
                    location.pathname.includes("complains")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Suggestions and Complaints
                </Link>
                <Link
                  to="contact/hiring"
                  className={`${
                    location.pathname.includes("hiring")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Recruitment
                </Link>
                <Link
                  to="contact/volunteer"
                  className={`${
                    location.pathname.includes("volunteer")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Volunteering
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
        <ul className="list flex gap-6">
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("about")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              about
              {hover ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="about/goals"
                  className={`${
                    location.pathname.includes("goals")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Association objectives
                </Link>
                <Link
                  to="about/activities"
                  className={`${
                    location.pathname.includes("activities")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Activities
                </Link>
                <Link
                  to="about/add-members"
                  className={`${
                    location.pathname.includes("add-members")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Members of the Board of Directors
                </Link>
                <Link
                  to="about/executive"
                  className={`${
                    location.pathname.includes("executive")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Executive Team
                </Link>
                <Link
                  to="about/members"
                  className={`${
                    location.pathname.includes("/members")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Association Members
                </Link>
                <Link
                  to="about/administrative"
                  className={`${
                    location.pathname.includes("administrative")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Administrative Structure of the Association
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
          >
            <Link
              to="gallery"
              className={`${
                location.pathname.includes("gallery")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Gallery
            </Link>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("projects")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Projects
            </Link>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("commitment")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Governance and Compliance{" "}
              {hover ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="commitment/parallel-list"
                  className={`${
                    location.pathname.includes("parallel-list")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  Financial Budget{" "}
                </Link>
                <Link
                  to="commitment/financial-list"
                  className={`${
                    location.pathname.includes("financial-list")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Financial Statements
                </Link>
                <Link
                  to="commitment/future-plan"
                  className={`${
                    location.pathname.includes("future-plan")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Future Plan
                </Link>
                <Link
                  to="commitment/criteria"
                  className={`${
                    location.pathname.includes("criteria")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  Standard of Governance and Compliance
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="services"
              className={`${
                location.pathname.includes("services")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Services {hover ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="services/sponsors"
                  className={`${
                    location.pathname.includes("sponsors")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Sponsors
                </Link>
                <Link
                  to="services/memberships"
                  className={`${
                    location.pathname.includes("memberships")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Memberships
                </Link>
                <Link
                  to="services/products"
                  className={`${
                    location.pathname.includes("products")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Products
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => setActive(!active)}
            className={`${
              active
                ? " !text-start !justify-end active"
                : " !text-start !justify-end"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              to="#"
              className={`${
                location.pathname.includes("contact")
                  ? "!text-[black]"
                  : " !text-start !justify-end"
              }`}
            >
              {" "}
              Contact us {hover ? <HiChevronUp /> : <HiChevronDown />}
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link
                  to="contact/complains"
                  className={`${
                    location.pathname.includes("complains")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Suggestions and complaints
                </Link>
                <Link
                  to="contact/hiring"
                  className={`${
                    location.pathname.includes("hiring")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Employment
                </Link>
                <Link
                  to="contact/volunteer"
                  className={`${
                    location.pathname.includes("volunteer")
                      ? "active !text-start !justify-end"
                      : " !text-start !justify-end"
                  }`}
                >
                  {" "}
                  Volunteering
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EnglishHeader;
