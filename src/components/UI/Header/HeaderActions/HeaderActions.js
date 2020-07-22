import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToggleThemeButton } from "../../../components_index";
import mail from "../../../../assets/images/mailicon2.svg";
import allies from "../../../../assets/images/alliesicon.svg";
import menubars from "../../../../assets/images/menubars.svg";
import { useSelector } from "react-redux";
export const HeaderActions = (props) => {
  const { setOpenMobile, openMobile, getMenuButtonRef } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const { currentUser, isLoggedIn } = useSelector((state) => state.userReducer);
  const messageCount = 0;
  const friendRequests = 0;
  const mobileButton = useRef(null);
  useEffect(() => {
    const mobileMenuButton = mobileButton.current;
    getMenuButtonRef(mobileMenuButton);
  }, [getMenuButtonRef]);
  return (
    <div className="HeaderActions-container">
      {isLoggedIn ? (
        <>
          <Link to="/messages" className="header-link">
            <img src={mail} className="header-icon" alt="" />
            <span className="header-count">
              {messageCount > 0 ? messageCount : ""}
            </span>
          </Link>
          <Link to="/friends" className="header-link">
            <img src={allies} className="header-icon" alt="" />
            <span className="header-count">
              {friendRequests > 0 ? friendRequests : ""}
            </span>
          </Link>
          <Link
            to={`/users/${currentUser.username}`}
            className={`${
              isDarkTheme ? "current-user-dark" : "current-user-light"
            }`}
          >
            <img
              src={currentUser.profile.user_img}
              alt=""
              className="current-user-pic"
            />
            <span id="usename-header-text">{currentUser.username}</span>
          </Link>
        </>
      ) : null}
      <div className="header-desktop">
        <ToggleThemeButton />
      </div>
      <div className="MobileMenu-button-container" ref={mobileButton}>
        <button
          className="Mobile-Menu-Button"
          onClick={() => setOpenMobile(!openMobile)}
        >
          <img src={menubars} alt="" />
        </button>
      </div>
    </div>
  );
};
