import React, { useState } from "react";
import "./Activities.css";
import SmallTitle from "../SmallTitle/SmallTitle";
import mount1 from "../../images/5881775159038296683.jpg";
import mount2 from "../../images/5881775159038296685.jpg";
import mount3 from "../../images//5881775159038296686.jpg";
import mount4 from "../../images/5881775159038296687.jpg";
import mount5 from "../../images/5881775159038296688.jpg";
import mount6 from "../../images/5881775159038296689.jpg";

function ArabicActivities() {
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [activities, setActivities] = useState([
    { id: 0, title: "تسلق الجبال​", image: mount1 },
    { id: 1, title: "المسارات الجبلية​", image: mount2 },
    { id: 2, title: "قيادة المركبات الآلية الجبلية​", image: mount3 },
    { id: 3, title: "حوائط التسلق ( للأطفال )", image: mount4 },
    {
      id: 4,
      title: "معسكرات الرياضات الجبلية الشاملة ( متخصصة )",
      image: mount5,
    },
    { id: 5, title: "ورش العمل التعليمية​", image: mount6 },
  ]);
  const showActivity = (e, idx) => {
    setShow(!show);
    setCurrentId(idx === e.id ? idx : "");
  };
  return (
    <div className="activities">
      <SmallTitle title="أنشطة الجمعية" />
      <div className="all-activities">
        {activities.map((e, idx) => (
          <div
            key={idx}
            onClick={() => showActivity(e, idx)}
            className="activity"
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

export default ArabicActivities;
