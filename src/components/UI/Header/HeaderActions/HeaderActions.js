import React from "react";
import { Link } from "react-router-dom";
import mail from "../../../../assets/images/mailicon2.svg";
import allies from "../../../../assets/images/alliesicon.svg";
import menubars from "../../../../assets/images/menubars.svg";
import { useDispatch } from "react-redux";

export const HeaderActions = (props) => {
  const {
    messageCount,
    friendRequests,
    currentUser,
    setOpenMobile,
    openMobile,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="HeaderActions-container">
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
      <Link to={`/users/${currentUser.username}`} className="current-user-link">
        <img
          src={currentUser.profile.user_img}
          alt=""
          className="current-user-pic"
        />
        <span id="usename-header-text">{currentUser.username}</span>
      </Link>
      <div>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          theme
        </button>
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
