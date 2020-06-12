import React, { useContext } from "react";
import { AppContext } from "../../../contexts/index";
import { sampleUser } from "../../../contexts/dumbydata/sample_user";

export const LogInOut = (props) => {
  const { logIn, logOut, user, isLoggedIn } = useContext(AppContext);
  const handleLogIn = () => {
    logIn(sampleUser);
  };
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      {isLoggedIn ? (
        <span>
          {user.userName}
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
