import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import Icons from "../socialMedia/socialMediaLinks";

function EnglishComplains() {
  return (
    <div className="contact-us !flex-row-reverse">
      <div className="info">
        <SmallTitle title="Suggestions and Complains" />
      </div>
      <div className="contact-form-info !text-start">
        <form className="form">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className=""
          />
          <input type="email" id="email" placeholder="Email" className="" />
          <textarea
            name="message"
            placeholder="Suggestion or Complain"
            className=""
          ></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="contact-side-info !text-start">
          <div className="back"></div>
          <div className="title !items-start">
            <h1>Contact us for any information</h1>
          </div>
          <div className="contact-me">
            <h4>Location</h4>
            <address>Kingdom of Saudi Arabia - Al Baha</address>
          </div>
          <div className="contact-me">
            <h4>Phone && Email</h4>
            <address className="text-center lowercase">
              SHADAMOUNTAINSPORTS@GMAIL.COM <br />
              <strong className="">&&</strong>
              <br /> 0551471042
            </address>
          </div>
          <div className="contact-me">
            <h4> Follow us </h4>
            <div className="icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishComplains;
