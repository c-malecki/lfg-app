import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogInOut, UserLink } from "../components_index";
import { AppStateContext } from "../../contexts/context_index";

export const Header = (props) => {
  const { currentUser, isLoggedIn } = useContext(AppStateContext);
  return (
    <div className="Header-container">
      <div className="Header-actions">
        {isLoggedIn ? (
          <>
            <UserLink username={currentUser.account.user_name} />
            <Link to="/messages">M</Link>
          </>
        ) : null}
        <LogInOut />
      </div>
    </div>
  );
};
