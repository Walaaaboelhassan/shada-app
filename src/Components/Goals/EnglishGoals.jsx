import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import SmallTitle from "../SmallTitle/SmallTitle";

function EnglishGoals() {
  return (
    <div className="goals">
      <SmallTitle title={"Objectives​"} />
      <div className="all-goals-box flex flex-wrap justify-center items-center gap-9">
        <div className="goals-box shadow-lg ">
          <div className="title">
            <h1> Increase Awareness </h1>
          </div>
          <div className="description">
            <p>
              Raise public awareness of the benefits and excitement of mountain
              sports.​
            </p>
          </div>
        </div>
        <div className="goals-box shadow-lg ">
          <div className="title">
            <h1> Cultural Integration</h1>
          </div>
          <div className="description">
            <p>
              Integrate mountain sports into the local culture and make them a
              core part of Al-Baha's identity.
            </p>
          </div>
        </div>
        <div className="goals-box shadow-lg ">
          <div className="title">
            <h1> Activate Sports</h1>
          </div>
          <div className="description">
            <p>
              Develop and organize a diverse range of mountain sports activities
              to encourage community participation and attract enthusiasts.
            </p>
          </div>
        </div>
        <div className="goals-box shadow-lg ">
          <div className="title">
            <h1> Safety and Training</h1>
          </div>
          <div className="description">
            <p>
              Provide training programs and workshops on safety to ensure
              participants are well-prepared and knowledgeable.
            </p>
          </div>
        </div>
        <div className="goals-box shadow-lg ">
          <div className="title">
            <h1> Sustainable Practices</h1>
          </div>
          <div className="description">
            <p>
              Promote environmentally friendly and sustainable practices in all
              mountain sports activities to preserve the natural environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishGoals;
