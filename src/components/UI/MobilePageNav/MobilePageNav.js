import React, { useContext } from "react";
import { GeneralLink } from "../../components_index";
import { AppState } from "../../../contexts/context_index";

export const MobilePageNav = (props) => {
  const { openMobilePageNav } = useContext(AppState);
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
