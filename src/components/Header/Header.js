import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogInOut, UserLink } from "../components_index";
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
            <UserLink username={currentUser.account.user_name} />
            <Link to="/messages" style={{ textDecoration: "none" }}>
              messages ({messageCount})
            </Link>
          </>
        ) : null}
        <LogInOut />
      </div>
    </div>
  );
};
