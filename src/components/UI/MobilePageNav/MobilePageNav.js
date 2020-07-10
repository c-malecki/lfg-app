import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const MobilePageNav = (props) => {
  const { openMobilePageNav } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`MobilePageNav-container ${
        openMobilePageNav ? "open-nav" : ""
      }`}
    >
      <span>
        <GeneralLink url="/" text="home" addClass="PageNavLink" />
        <GeneralLink url="/g" text="groups" addClass="PageNavLink" />
        <GeneralLink url="/posts" text="posts" addClass="PageNavLink" />
      </span>
    </div>
  );
};
