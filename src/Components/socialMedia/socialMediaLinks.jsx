import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./socialMediaLinks";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

class socialMediaLinks extends Component {
  render() {
    return (
      <div className="social-media-links">
        <Link className="facebook" to="https://www.facebook.com/m.ms.ih/">
          <RiFacebookCircleLine />
        </Link>
        <Link
          className="instagram"
          to="https://www.instagram.com/khayreddine04/"
        >
          <RiInstagramLine />{" "}
        </Link>
        <Link
          className="linkedin"
          to="https://in.linkedin.com/in/khayreddine-aharrar/"
        >
          <RiLinkedinFill />
        </Link>
      </div>
    );
  }
}

export default socialMediaLinks;
