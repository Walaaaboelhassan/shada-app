import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import SmallTitle from "../SmallTitle/SmallTitle";

function EnglishProducts() {
  return (
    <div>
      <SmallTitle title={"Association Products​​"} />
      <div className="all-products-box flex flex-wrap justify-center items-center gap-9">
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Merchandise</h1>
          </div>
          <div className="description">
            <p>
              Branded clothing, gear, and accessories for mountain sports
              enthusiasts.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Guided Tours</h1>
          </div>
          <div className="description">
            <p>
              Professional guided tours in the Shada Mountains for groups and
              individuals.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1>Event Packages</h1>
          </div>
          <div className="description">
            <p>
              Customized event packages, including team-building activities for
              companies and school trips.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Training Programs</h1>
          </div>
          <div className="description">
            <p>Comprehensive training programs for various mountain sports.​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishProducts;
