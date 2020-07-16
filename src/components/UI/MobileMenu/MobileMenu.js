import React from "react";
import { LogInOut, GeneralLink } from "../../components_index";

export const MobileMenu = (props) => {
  return (
    <div className="MobileMenu-container">
      <div className="MobileMenu-content">
        <GeneralLink url="/" text="home" addClass="PageNavLink" />
        <GeneralLink url="/g" text="groups" addClass="PageNavLink" />
        <GeneralLink url="/posts" text="posts" addClass="PageNavLink" />
        <LogInOut />
      </div>
    </div>
  );
};
