import React from "react";
import { GeneralLink } from "../../components_index";

export const PageNav = (props) => {
  return (
    <div className="PageNav-container">
      <span>
        <GeneralLink url="/" text="home" addClass="nav-link" />
        <GeneralLink url="/g" text="groups" addClass="nav-link" />
        <GeneralLink url="/posts" text="posts" addClass="nav-link" />
      </span>
    </div>
  );
};
