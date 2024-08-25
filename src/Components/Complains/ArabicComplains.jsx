import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import Icons from "../socialMedia/socialMediaLinks";

function ArabicComplains() {
  return (
    <div className="contact-us">
      <div className="info">
        <SmallTitle title="الشكاوى والمقترحات" />
      </div>
      <div className="contact-form-info">
        <form className="form">
          <input
            type="text"
            id="username"
            placeholder="الإسم"
            className="text-end"
          />
          <input
            type="email"
            id="email"
            placeholder="الإيميل"
            className="text-end"
          />
          <textarea
            name="message"
            placeholder="الشكاية أو المقترح"
            className="text-end"
          ></textarea>
          <input type="submit" value="إبعث" />
        </form>
        <div className="contact-side-info">
          <div className="back"></div>
          <div className="title">
            <h1>تواصل معنا لأي معلومة</h1>
          </div>
          <div className="contact-me">
            <h4>الموقع</h4>
            <address>المملكة العربية السعودية – الباحة</address>
          </div>
          <div className="contact-me">
            <h4>الهاتف && الإيميل</h4>
            <address className="text-center">
              SHADAMOUNTAINSPORTS@GMAIL.COM <br />
              <strong className="">&&</strong>
              <br /> 0551471042
            </address>
          </div>
          <div className="contact-me">
            <h4>تابعنا على </h4>
            <div className="icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicComplains;
