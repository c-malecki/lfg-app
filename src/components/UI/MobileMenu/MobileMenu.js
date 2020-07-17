import React from "react";
import { LogInOut, GeneralLink } from "../../components_index";

export const MobileMenu = (props) => {
  return (
    <div className="MobileMenu-container">
      <div className="MobileMenu-content">
        <GeneralLink url="/" text="home" addClass="nav-link" />
        <GeneralLink url="/g" text="groups" addClass="nav-link" />
        <GeneralLink url="/posts" text="posts" addClass="nav-link" />
        <LogInOut />
      </div>
    </div>
  );
};
