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
  const { currentUser, isLoggedIn } = useSelector((state) => state.userReducer);
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
          {isLoggedIn ? (
            <HeaderActions
              messageCount={0}
              friendRequests={0}
              currentUser={currentUser}
              setOpenMobile={setOpenMobile}
              openMobile={openMobile}
            />
          ) : null}
          <div className="LogOut-desktop">
            <LogInOut />
          </div>
        </div>
      </div>
      {openMobile ? <MobileMenu /> : null}
    </div>
  );
};
