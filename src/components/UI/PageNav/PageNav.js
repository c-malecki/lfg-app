import React from "react";
import { GeneralLink } from "../../components_index";

export const PageNav = (props) => {
  return (
    <div className="PageNav-container">
      <span>
        <GeneralLink url="/" text="home" addClass="PageNavLink" />
        <GeneralLink url="/g" text="groups" addClass="PageNavLink" />
      </span>
    </div>
  );
};
