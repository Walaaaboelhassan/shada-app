import React from "react";
import "./Sponsors.css";
import TopSection from "../src/Components/TopSection/TopSection";
import { GoSponsorTiers } from "react-icons/go";
import SmallTitle from "../src/Components/SmallTitle/SmallTitle";
import Groups from "../src/Components/Groups/Groups";
import FD from "../../../images/فضي.png";
import gold from "../../../images/ذهبي.png";
import platinium from "../../../images/بلاتينيوم.png";
import bronzy from "../../../images/برونزي.png";
import normal from "../../../images/logo1.png";

function EnglishSponsors() {
  return (
    <div className="sponsors">
      <TopSection
        title="Supporting and Sponsoring bodies"
        content="sponsorship and support program was designed to support the association's activities in several categories that suit all interested parties so that it achieves qualitative gains for the sponsor and also helps the association to carry out its community duty and activities that enhance its activity Sponsorship categories"
      />
      <SmallTitle title="Sponsors & Supporters​ ​" />
      <div className="all-sponsors-box flex flex-wrap justify-center items-center gap-9">
        <div className="sponsors-box shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={normal} alt="bronzy" />
          </div>
          <div className="title">
            <h1> Regular sponsorship​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={bronzy} alt="bronzy" />
          </div>
          <div className="title">
            <h1> Bronze sponsorship​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={FD} alt="bronzy" />
          </div>
          <div className="title">
            <h1>Silver sponsorship</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={gold} alt="bronzy" />
          </div>
          <div className="title">
            <h1> Golden sponsorship​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={platinium} alt="bronzy" />
          </div>
          <div className="title">
            <h1>Platinum sponsorship​ ​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
      </div>
      <Groups />
    </div>
  );
}

export default EnglishSponsors;
