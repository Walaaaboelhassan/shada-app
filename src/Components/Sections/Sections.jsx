import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "../Sections/About/About";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Activities from "../Activities/Activities";
import Commitment from "./Commitment/Commitment";
import Goals from "../Goals/Goals";
import Gallery from "../Sections/Gallery/Gallery";
import Memberships from "../Memberships/Memberships";
import Criteria from "../Criteria/Criteria";
import FinancialList from "../FinancialList/FinancialList";
import Future from "../Future/Future";
import ParallelList from "../ParallelList/ParallelList";
import Sponsors from "../Sponsors/Sponsors";
import Administrative from "../Administrative/Administrative";
import AddmAss from "../AdmAssocia/AddmAss";
import Executive from "../Executive/Executive";
import Members from "../Members/Members";
import Contact from "../Sections/Contact/Contact";
import Products from "../Products/Products";
import Error from "../Error/Error";
import Hiring from "../Hiring/Hiring";
import Volunteer from "../Volunteer/Volunteer";
import Complains from "../Complains/Complains";

function Sections() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("about/add-members");
    }
  }, []);

  return (
    <div className="sections">
      <Routes>
        <Route path="about" element={<About />}>
          <Route path="administrative" element={<Administrative />} />
          <Route path="add-members" element={<AddmAss />} />
          <Route path="executive" element={<Executive />} />
          <Route path="members" element={<Members />} />
          <Route path="goals" element={<Goals />} />
          <Route path="activities" element={<Activities />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />}>
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="contact" element={<Contact />}>
          <Route path="hiring" element={<Hiring />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="complains" element={<Complains />} />
        </Route>
        <Route path="commitment" element={<Commitment />}>
          <Route path="criteria" element={<Criteria />} />
          <Route path="financial-list" element={<FinancialList />} />
          <Route path="future-plan" element={<Future />} />
          <Route path="parallel-list" element={<ParallelList />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Sections;
