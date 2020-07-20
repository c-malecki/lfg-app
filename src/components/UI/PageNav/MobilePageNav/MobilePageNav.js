import React from "react";
import { GeneralLink } from "../../../components_index";
import { useSelector } from "react-redux";

export const MobilePageNav = () => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`${
        isDarkTheme ? "MobilePageNav-dark" : "MobilePageNav-light"
      }`}
    >
      <div className="MobilePageNav-content">
        <GeneralLink
          url="/"
          text="H"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
        <GeneralLink
          url="/g"
          text="G"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
        <GeneralLink
          url="/posts"
          text="P"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
      </div>
    </div>
  );
};
