import React from "react";
import "./Sponsors.css";
import SmallTitle from "../SmallTitle/SmallTitle";
import FD from "../../images/فضي.png";
import gold from "../../images/ذهبي.png";
import platinium from "../../images/بلاتينيوم.png";
import bronzy from "../..//images/برونزي.png";
import normal from "../../images/logo.png";

function ArabicSponsors() {
  return (
    <div className="sponsors">
      <SmallTitle title={"الرعاة ​"} />
      <div className="all-sponsors-box flex flex-wrap justify-center items-center gap-9">
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={normal} alt="normal" />
          </div>
          <div className="title">
            <h1> رعاية عادية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={bronzy} alt="bronzy" />
          </div>
          <div className="title">
            <h1> رعاية برونزية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={FD} alt="bronzy" />
          </div>
          <div className="title">
            <h1>رعاية فضية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={gold} alt="bronzy" />
          </div>
          <div className="title">
            <h1> رعاية ذهبية</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={platinium} alt="bronzy" />
          </div>
          <div className="title">
            <h1>رعاية بلاتينية ​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicSponsors;
