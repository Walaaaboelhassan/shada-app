import React from "react";
import logo from "../../images/logo1.png";
import circularShape from "../../images/circular shape.png";
import linesShape from "../../images/lines shape.png";
import plusShape from "../../images/plus shape.png";
import Icons from "../socialMedia/socialMediaLinks";
import { Link } from "react-router-dom";

function EnglishFooter() {
  return (
    <div className="footer ">
      <div className="footer-top ">
        <div className="summary ">
          <div className="logo">
            <Link className="flex " to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            A civil association specialized in providing solutions for mountain
            sports and promoting the culture of community sports by taking
            advantage of the natural resources that characterize the region.
          </p>
          <div className="contact-us">
            <div className="icon ">
              <i className="bi bi-telephone"></i>
            </div>
            <img className="circle " src={circularShape} alt="circularShape" />
            <div className="contact-info-num">
              <h3>Contact us</h3>
              <h4 className="number !text-[18px]">0551471042</h4>
            </div>
          </div>
        </div>
        <div className="quick-links">
          <h1 className="title">Quick links</h1>
          <div className="links">
            <Link to="/about">about</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/join-us">Join us</Link>
          </div>
        </div>
        <div className="service">
          <h1 className="title">Our Services</h1>
          <div className="links">
            <Link to="#">Raising awareness</Link>
            <Link to="#">Cultural Integration</Link>
            <Link to="#">Activate sports</Link>
            <Link to="#">Safety and Training</Link>
          </div>
        </div>
        <div className="subscribe">
          <h1 className="title">Subscribe now</h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="submit" value={"send"} />
          </form>
          <Icons />
        </div>
      </div>
      <img className="lines" src={linesShape} alt="linesShape" />
      <img className="plus" src={plusShape} alt="plusShape" />
      <div className="footer-bottom">
        <p>Copyright © 2024 reserved by Shada Association</p>
      </div>
    </div>
  );
}

export default EnglishFooter;
