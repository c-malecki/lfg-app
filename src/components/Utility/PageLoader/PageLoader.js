import React from "react";
import Logo from "../../../assets/images/LFGwithicon.png";
import { useSelector } from "react-redux";

export const PageLoader = () => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="PageLoader-container">
      <div
        className={`${isDarkTheme ? "PageLoader-dark" : "PageLoader-light"}`}
      >
        <img src={Logo} alt="LFG logo" />
      </div>
    </div>
  );
};
