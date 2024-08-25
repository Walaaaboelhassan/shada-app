import React, { useState } from "react";
import "./Activities.css";
import SmallTitle from "../SmallTitle/SmallTitle";
import mount1 from "../../images/5881775159038296683.jpg";
import mount2 from "../../images/5881775159038296685.jpg";
import mount3 from "../../images//5881775159038296686.jpg";
import mount4 from "../../images/5881775159038296687.jpg";
import mount5 from "../../images/5881775159038296688.jpg";
import mount6 from "../../images/5881775159038296689.jpg";

function EnglishActivities() {
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [activities, setActivities] = useState([
    { id: 0, title: "Mountain Climbing", image: mount1 },
    { id: 1, title: "Mountain Trail​", image: mount2 },
    { id: 2, title: "Mountain Biking​", image: mount3 },
    { id: 3, title: "Climbing Walls (for Children)", image: mount4 },
    {
      id: 4,
      title: "Comprehensive Mountain Sports Camps (Specialized)​",
      image: mount5,
    },
    { id: 5, title: "Educational Workshops", image: mount6 },
  ]);
  const showActivity = (e, idx) => {
    setShow(!show);
    setCurrentId(idx === e.id ? idx : "");
  };
console.log(activities)
  return (
    <div className="activities">
      <SmallTitle title="Association Activities​" />
      <div className="all-activities">
        {activities.map((e, idx) => (
          <div
            key={idx}
            onClick={() => showActivity(e, idx)}
            className="activity !text-start"
            style={{
              height: `${show && idx === currentId ? "380px" : "60px"}`,
            }}
          >
            <p>{e.title}</p>
            <div className="image">
              <img src={e.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnglishActivities;
