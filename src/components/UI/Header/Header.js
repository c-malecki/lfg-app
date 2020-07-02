import React, { useContext, useEffect, useState } from "react";
import { LogInOut, LfgHeaderLink, MobileMenu } from "../../components_index";
import { Link } from "react-router-dom";
import { UsersState, MessagesState } from "../../../contexts/context_index";
import mail from "../../../assets/images/mailicon2.svg";
import allies from "../../../assets/images/alliesicon.svg";
import menubars from "../../../assets/images/menubars.svg";

export const Header = (props) => {
  const [messageCount, setMessageCount] = useState(null);
  const [friendRequests, setFriendRequests] = useState(null);
  const [openMobile, setOpenMobile] = useState(false);
  const { currentUser, isLoggedIn } = useContext(UsersState);
  const { userMessages } = useContext(MessagesState);
  useEffect(() => {
    if (currentUser && userMessages) {
      const user = userMessages.find(
        (u) => u.user_name === currentUser.user_name
      );
      const unreadMessages = user.messages.filter(
        (m) => m.read === false && m.sender === false
      ).length;
      const unreadReply = user.messages.filter((m) => m.unread_reply === true)
        .length;
      const friendRequestCount = currentUser.friends.filter(
        (f) => f.pending === true && f.sender === false
      ).length;
      const count = unreadMessages + unreadReply;
      setMessageCount(count);
      setFriendRequests(friendRequestCount);
    }
  }, [currentUser, userMessages]);
  return (
    <div className="Header-container">
      <LfgHeaderLink />
      <div className="Header-actions">
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
              to={`/users/${currentUser.account.user_name}`}
              className="current-user-link"
            >
              <img
                src={currentUser.profile.profile_pic}
                alt=""
                className="current-user-pic"
              />
              <span className="UserLink">{currentUser.account.user_name}</span>
            </Link>
          </>
        ) : null}
        <LogInOut />
      </div>
      <div className="Mobile-Header-actions">
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
              to={`/users/${currentUser.account.user_name}`}
              className="current-user-link"
            >
              <img
                src={currentUser.profile.profile_pic}
                alt=""
                className="current-user-pic"
              />
            </Link>
          </>
        ) : null}
        <button
          className="Mobile-Menu-Button"
          onClick={() => setOpenMobile(!openMobile)}
        >
          <img src={menubars} alt="" />
        </button>
      </div>
      {openMobile ? <MobileMenu /> : null}
    </div>
  );
};
