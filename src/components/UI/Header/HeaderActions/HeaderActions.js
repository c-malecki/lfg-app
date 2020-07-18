import React from "react";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "../../../components_index";
import mail from "../../../../assets/images/mailicon2.svg";
import allies from "../../../../assets/images/alliesicon.svg";
import menubars from "../../../../assets/images/menubars.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const HeaderActions = (props) => {
  const { setOpenMobile, openMobile } = props;
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const { currentUser, isLoggedIn } = useSelector((state) => state.userReducer);
  const messageCount = 0;
  const friendRequests = 0;
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
        <ToggleSwitch
          method={() => dispatch({ type: "TOGGLE_THEME" })}
          boolean={isDarkTheme}
          addClass={`${isDarkTheme ? "toggle-dark" : "toggle-light"}`}
        />
      </div>
      <div className="MobileMenu-button-container">
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
