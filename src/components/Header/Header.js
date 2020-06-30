import React, { useContext, useEffect, useState } from "react";
import { LogInOut, GeneralLink } from "../components_index";
import { UsersState, MessagesState } from "../../contexts/context_index";

export const Header = (props) => {
  const [messageCount, setMessageCount] = useState(null);
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
      const count = unreadMessages + unreadReply;
      setMessageCount(count);
    }
  }, [currentUser, userMessages]);
  return (
    <div className="Header-container">
      <div className="Header-actions">
        {isLoggedIn ? (
          <>
            <GeneralLink
              url={`/users/${currentUser.account.user_name}`}
              text={currentUser.account.user_name}
              addClass="UserLink"
            />
            <GeneralLink
              url={`/messages`}
              text={`messages (${messageCount})`}
            />
            <GeneralLink url={`/friends`} text={`friends`} />
          </>
        ) : null}
        <LogInOut />
      </div>
    </div>
  );
};
