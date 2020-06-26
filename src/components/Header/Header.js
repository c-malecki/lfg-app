import React, { useContext, useEffect, useState } from "react";
import { LogInOut, GeneralLink } from "../components_index";
import { UsersState } from "../../contexts/context_index";

export const Header = (props) => {
  const [messageCount, setMessageCount] = useState(null);
  const { currentUser, isLoggedIn } = useContext(UsersState);
  useEffect(() => {
    if (currentUser) {
      const unreadMessages = currentUser.messages.inbox.filter(
        (message) => message.read === false
      ).length;
      setMessageCount(unreadMessages);
    }
  }, [currentUser]);
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
          </>
        ) : null}
        <LogInOut />
      </div>
    </div>
  );
};
