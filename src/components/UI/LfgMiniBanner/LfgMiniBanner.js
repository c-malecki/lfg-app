import React from "react";
import { Link } from "react-router-dom";
import LFGmini from "../../../assets/images/LFGwithicon.png";

export const LfgMiniBanner = (props) => {
  return (
    <div className="LfgMiniBanner-container">
      <Link to="/">
        <img src={LFGmini} alt="LFG" className="LfgMiniBanner-img" />
      </Link>
    </div>
  );
};
