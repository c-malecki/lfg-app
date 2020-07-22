import React, { useState } from "react";
import {
  LfgHeaderLink,
  MobileMenu,
  LogInOut,
  PageNav,
} from "../../components_index";
import { HeaderActions } from "./HeaderActions/HeaderActions";
import { useSelector } from "react-redux";

export const Header = (props) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileMenuButtonRef, setMobileMenuButtonRef] = useState(null);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`Header-container ${
        isDarkTheme ? "header-dark" : "header-light"
      }`}
    >
      <div className="Header-content">
        <LfgHeaderLink />
        <PageNav />
        <div className="Header-content-actions">
          <HeaderActions
            setOpenMobile={setOpenMobile}
            openMobile={openMobile}
            getMenuButtonRef={setMobileMenuButtonRef}
          />
          <div className="header-desktop">
            <LogInOut />
          </div>
        </div>
      </div>
      {openMobile ? (
        <MobileMenu
          setOpenMobile={setOpenMobile}
          openMobile={openMobile}
          menuButtonRef={mobileMenuButtonRef}
        />
      ) : null}
    </div>
  );
};
