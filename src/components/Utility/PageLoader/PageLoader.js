import React from "react";
import Logo from "../../../assets/images/LFGwithicon.png";

export const PageLoader = () => {
  return (
    <div className="PageLoader-container">
      <div className="PageLoader-content">
        <img src={Logo} alt="LFG logo" />
      </div>
    </div>
  );
};
