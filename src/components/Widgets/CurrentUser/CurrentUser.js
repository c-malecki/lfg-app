import React, { useContext } from "react";
import { UsersState } from "../../../contexts/context_index";

export const CurrentUser = (props) => {
  const { currentUser } = useContext(UsersState);
  return (
    <div className="CurrentUser-container">
      {currentUser ? (
        <>
          <h3>{currentUser.user_name}</h3>
          <img
            src={currentUser.profile.profile_pic}
            alt={currentUser.user_name}
          />
        </>
      ) : (
        <span className="not-logged-in">Currently not logged in.</span>
      )}
    </div>
  );
};
