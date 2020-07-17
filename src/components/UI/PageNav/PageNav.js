import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const PageNav = (props) => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="PageNav-container">
      <span>
        <GeneralLink
          url="/"
          text="home"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
        <GeneralLink
          url="/g"
          text="groups"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
        <GeneralLink
          url="/posts"
          text="posts"
          addClass={`${isDarkTheme ? "nav-link-dark" : "nav-link-light"}`}
        />
      </span>
    </div>
  );
};
