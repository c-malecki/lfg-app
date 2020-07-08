import React from "react";
import { Link } from "react-router-dom";
import mail from "../../../../assets/images/mailicon2.svg";
import allies from "../../../../assets/images/alliesicon.svg";
import menubars from "../../../../assets/images/menubars.svg";

export const HeaderActions = (props) => {
  const {
    messageCount,
    friendRequests,
    currentUser,
    setOpenMobile,
    openMobile,
  } = props;
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
      <Link
        to={`/users/${currentUser.account.user_name}`}
        className="current-user-link"
      >
        <img
          src={currentUser.profile.profile_pic}
          alt=""
          className="current-user-pic"
        />
        <span className="UserLink" id="usename-header-text">
          {currentUser.account.user_name}
        </span>
      </Link>
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
