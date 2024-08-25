import React from "react";
import SmallTitle from "../src/Components/SmallTitle/SmallTitle";

function EnglishStructure() {
  return (
    <div className="structure">
      <div className="cover"></div>
      <SmallTitle title="تنظيمات هيكلية" />
      <div className="top-side">
        <h1 className="branch-title">
          continuous development <b>&&</b> Continuous effectiveness
        </h1>
        <p>
          To reach the goals, the organizational pyramid must be built clearly
          and explicitly to ensure continuity and non-overlap of work, and thus
          permanent follow-up
        </p>
      </div>
      <div className="bottom-side ">
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box ">
              <p>Continuous development</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>Business development</span>
            <p className="">
              Developing the business to reach new goals according to a clear
              strategy approved by the Board of Directors, according to what the
              market requires, as well as to achieve the societal and commercial
              interest
            </p>
          </div>
        </div>
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box">
              <p>Effective marketing</p>
            </div>
            <div className="box">
              {" "}
              <p>Qualitative projects</p>
            </div>
            <div className="box">
              {" "}
              <p>Communication and impactful partnerships</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>Activating executive processes</span>
            <p className="">
              The executive factor is very important in implementing the
              approved plans that work to advance operations to distant horizons
            </p>
          </div>
        </div>
        <div className="purpose flex items-center justify-evenly gap-10">
          <div className="aspect">
            <div className="box">
              <p>
                Formation of the Board of Directors and approval of regulations
              </p>
            </div>
            <div className="box">
              {" "}
              <p>Set the executive side</p>
            </div>
            <div className="box">
              <p>Formation of the work team</p>
            </div>
          </div>
          <div className="infos flex flex-col items-end">
            <span>Basis</span>
            <p className="">
              Forming the base and approving plans and regulations to reach a
              solid base for moving forward On to the next step
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishStructure;
