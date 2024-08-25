import React from "react";
import mount from "../../images/5881775159038296685.jpg";

function EnglishJoin() {
  return (
    <div className="join-us min-h-[100vh] flex justify-center items-center gap-4 ">
      <div className="image">
        <img src={mount} alt="mount" />
      </div>
      <div className="cover border-[12px] absolute"></div>
      <div className="info !text-start">
        <div className="title !text-left">
          <h1>Join us</h1>
        </div>
        <div className="paragraph">
          <p>
            Be a part of the Shada Mountain Sports Association and embark on an
            adventure through the breathtaking landscapes of the Al-Baha region.
            Whether you are a beginner looking to explore or an experienced
            mountaineer, our community welcomes you to experience the thrill and
            beauty of mountain sports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnglishJoin;
