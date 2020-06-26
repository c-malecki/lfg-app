import React from "react";
import { GeneralLink } from "../../components_index";

export const PageNav = (props) => {
  return (
    <div className="PageNav-container">
      <GeneralLink url="/" text="home" addClass="PageNavLink" />
      <GeneralLink url="/groups" text="groups" addClass="PageNavLink" />
    </div>
  );
};
