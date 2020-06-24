import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogInOut, UserLink } from "../components_index";
import { UsersState } from "../../contexts/context_index";

export const Header = (props) => {
  const { currentUser, isLoggedIn } = useContext(UsersState);
  return (
    <div className="Header-container">
      <div className="Header-actions">
        {isLoggedIn ? (
          <>
            <UserLink username={currentUser.account.user_name} />
            <Link to="/messages" style={{ textDecoration: "none" }}>
              messages ({currentUser.messages.unread})
            </Link>
          </>
        ) : null}
        <LogInOut />
      </div>
    </div>
  );
};
