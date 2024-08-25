import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import "./Hiring.css";
import logo from "../../images/logo1.png";

function ArabicHiring() {
  return (
    <div className="hiring">
      <SmallTitle title="التوظيف" />
      <div className="not">
        <p>قيد التطوير</p>
      </div>
      {/* <div className="form">
        <img src={logo} alt="logo" />
        <h1>طلب وظيفة</h1>
        <form>
          <fieldset>
            <input
              type="date"
              placeholder="تاريخ الانتهاء للهوية"
              id="username"
            />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="رقم الهوية" id="username" />
          </fieldset>
          <fieldset>
            <input type="date" placeholder="تاريخ الميلاد" id="username" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="username" id="username" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="اسم العائلة" id="username" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="الاسم الاول" id="username" />
          </fieldset>

          <fieldset>
            <input type="text" placeholder="البريد الالكتروني" id="username" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="هاتف" id="username" />
          </fieldset>
          <fieldset className="status-gender">
            <label htmlFor="status">الحالة الاجتماعية</label>
            <fieldset className="status">
              <fieldset>
                {" "}
                <label htmlFor="">عازب </label>
                <input type="radio" placeholder="username" id="username" />
              </fieldset>
              <fieldset>
                {" "}
                <label htmlFor="">متزوج</label>
                <input type="radio" placeholder="username" id="username" />
              </fieldset>
            </fieldset>
          </fieldset>
          <fieldset className="status-gender">
            <label htmlFor="gender">الجنس</label>
            <fieldset className="gender">
              <fieldset>
                <label htmlFor="">ذكر </label>
                <input type="radio" placeholder="username" id="username" />
              </fieldset>
              <fieldset>
                <label htmlFor="">انثى</label>
                <input type="radio" placeholder="username" id="username" />
              </fieldset>
            </fieldset>
          </fieldset>
        </form>
      </div> */}
    </div>
  );
}

export default ArabicHiring;
