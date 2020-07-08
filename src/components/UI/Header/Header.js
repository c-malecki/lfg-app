import React, { useContext, useEffect, useState } from "react";
import { LfgHeaderLink, MobileMenu, LogInOut } from "../../components_index";
import { UsersState, MessagesState } from "../../../contexts/context_index";
import { HeaderActions } from "./HeaderActions/HeaderActions";

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
      <div className="Header-content">
        <LfgHeaderLink />
        <div className="Header-content-actions">
          {isLoggedIn ? (
            <HeaderActions
              messageCount={messageCount}
              friendRequests={friendRequests}
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
