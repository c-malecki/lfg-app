import React from "react";
import { Link } from "react-router-dom";
import LFGmini from "../../../assets/images/LFGwithicon.png";

export const LfgHeaderLink = (props) => {
  return (
    <div className="LfgHeaderLink-container">
      <Link to="/">
        <img src={LFGmini} alt="LFG" className="LfgHeaderLink-img" />
      </Link>
    </div>
  );
};
