import React, { useContext } from "react";
import { UsersState, UsersDispatch } from "../../../contexts/context_index";
import { ButtonLink } from "../../components_index";

export const LogInOut = (props) => {
  const { isLoggedIn } = useContext(UsersState);
  const dispatch = useContext(UsersDispatch);
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="LogInOut-container">
      {isLoggedIn ? (
        <span>
          <ButtonLink
            url="/"
            method={handleLogOut}
            text="log out"
            addClass="general-theme-link"
            s
          />
        </span>
      ) : (
        <span>
          <ButtonLink
            url="/login"
            text="log in"
            addClass="general-theme-link"
          />
        </span>
      )}
    </div>
  );
};
