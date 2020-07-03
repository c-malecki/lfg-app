import React, { useState } from "react";
import { GeneralLink, GeneralButton } from "../../components_index";

export const MobilePageNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`MobilePageNav-container ${isOpen ? "open-nav" : ""}`}>
      <GeneralButton
        text={isOpen ? `>` : `<`}
        addClass="mobile-arrow-button"
        method={() => setIsOpen(!isOpen)}
      />
      <span>
        <GeneralLink url="/" text="home" addClass="PageNavLink" />
        <GeneralLink url="/g" text="groups" addClass="PageNavLink" />
        <GeneralLink url="/posts" text="posts" addClass="PageNavLink" />
      </span>
    </div>
  );
};
