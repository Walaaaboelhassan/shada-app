import React from "react";
import firstGroup from "../../images/first.png";
import secondGroup from "../../images/second.png";
import thirdGroup from "../../images/third.png";
import fourthGroup from "../../images/fourth.png";
import SmallTitle from "../src/Components/SmallTitle/SmallTitle";
import thumpsUp from "../../images/thumps up.png";

function EnglishGroups() {
  return (
    <div className="groups">
      <SmallTitle title={"Subscription to sports clubs"} />
      <div className="images flex items-center justify-center ">
        <img src={firstGroup} alt="group" />
        <img src={secondGroup} alt="group" />
        <img src={thirdGroup} alt="group" />
        <img src={fourthGroup} alt="group" />
      </div>
      <div className="two-sides flex items-center justify-evenly gap-8">
        <div className="why">
          <h1>Subscription to sports clubs</h1>
          <p>
            Sports clubs must be involved and activities should be opened at
            their locations and promoted For easy access for trainees, and
            enhancing the role of trainers in this sector
          </p>
        </div>
        <ul className="continue">
          <li>
            <img src={thumpsUp} alt="thump up" />
            Strengthening the relationship with the audience
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />A suitable environment for
            developing trainers
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />A training environment for
            trainers
          </li>
          <li>
            <img src={thumpsUp} alt="thump up" />
            Greater communication with the local community <br />
            (events/investment)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EnglishGroups;
