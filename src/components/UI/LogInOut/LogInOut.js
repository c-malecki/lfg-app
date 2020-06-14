import React, { useContext } from "react";
import { AppContext } from "../../../contexts/context_index";
import { sampleUsers } from "../../../contexts/dumbydata/sample_user";

export const LogInOut = (props) => {
  const { logIn, logOut, currentUser, isLoggedIn } = useContext(AppContext);
  const handleLogIn = () => {
    logIn(sampleUsers[0]);
  };
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      {isLoggedIn ? (
        <span>
          {currentUser.account.user_name}
          <button onClick={() => handleLogOut()}>Log Out</button>
        </span>
      ) : (
        <span>
          <button onClick={() => handleLogIn()}>Log In</button>
        </span>
      )}
    </div>
  );
};
