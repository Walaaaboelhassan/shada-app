import React from "react";
import TopSection from "../../TopSection/TopSection";
import image1 from "../../../images/5881775159038296683.jpg";
import image2 from "../../../images/5881775159038296685.jpg";
import image3 from "../../../images/5881775159038296686.jpg";
import image4 from "../../../images/5881775159038296687.jpg";
import image5 from "../../../images/5881775159038296688.jpg";
import image6 from "../../../images/5881775159038296689.jpg";
import SmallTitle from "../../SmallTitle/SmallTitle";

function EnglishGallery() {
  return (
    <div className="gallery">
      <TopSection title={"Assembly media"} />
      <SmallTitle title={"Gallery"} />
      <div className="images">
        <div className="image">
          <img src={image1} alt="image1" />
        </div>
        <div className="image">
          {" "}
          <div className="back-move"></div>
          <img src={image2} alt="image2" />
        </div>
        <div className="image">
          {" "}
          <div className="back-move"></div>
          <img src={image3} alt="image3" />
        </div>
        <div className="image">
          {" "}
          <div className="back-move"></div>
          <img src={image4} alt="image4" />
        </div>
        <div className="image">
          {" "}
          <div className="back-move"></div>
          <img src={image5} alt="image5" />
        </div>
        <div className="image">
          {" "}
          <div className="back-move"></div>
          <img src={image6} alt="image6" />
        </div>
      </div>
    </div>
  );
}

export default EnglishGallery;
