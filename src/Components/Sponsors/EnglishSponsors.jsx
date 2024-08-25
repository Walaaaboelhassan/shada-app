import React from "react";
import "./Sponsors.css";
import SmallTitle from "../SmallTitle/SmallTitle";
import FD from "../../images/فضي.png";
import gold from "../../images/ذهبي.png";
import platinium from "../../images/بلاتينيوم.png";
import bronzy from "../..//images/برونزي.png";
import normal from "../../images/logo.png";

function EnglishSponsors() {
  return (
    <div className="sponsors">
      <SmallTitle title={"Sponsors ​"} />
      <div className="all-sponsors-box flex flex-wrap justify-center items-center gap-9">
        <div className="sponsors-box text-end shadow-lg">
          <div className="icon">
            <img className="w-[92px]" src={normal} alt="normal" />
          </div>
          <div className="title">
            <h1 className="!text-[26px]"> Regular sponsorship</h1>
          </div>
          <div className="description">
            {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit Eos deleniti recusandae dicta, aspernatur consequatur eum </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg">
          <div className="icon">
            <img className="w-[92px]" src={bronzy} alt="bronzy" />
          </div>
          <div className="title">
            <h1 className="!text-[26px]"> Bronze sponsorship</h1>
          </div>
          <div className="description">
            {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. This is due to the decision, as per the following criteria.
 </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg">
          <div className="icon">
            <img className="w-[92px]" src={FD} alt="bronzy" />
          </div>
          <div className="title">
            <h1 className="!text-[26px]">Silver sponsorship</h1>
          </div>
          <div className="description">
            {/* < p> Lorem ipsum dolor sit amet consectetur adipisicing elit. This is due to the decision, as per the following criteria.
 </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg">
          <div className="icon">
            <img className="w-[92px]" src={gold} alt="bronzy" />
          </div>
          <div className="title">
            <h1 className="!text-[26px]">Golden sponsorship</h1>
          </div>
          <div className="description">
            {/* <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. This is due to the decision, as per the following criteria.
 </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg">
          <div className="icon">
            <img className="w-[92px]" src={platinium} alt="bronzy" />
          </div>
          <div className="title">
            <h1 className="!text-[26px]">Platinum sponsorship ​</h1>
          </div>
          <div className="description">
            {/* < p> Lorem ipsum dolor sit amet consectetur adipisicing elit. This is due to the decision, as per the following criteria.
 </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishSponsors;
