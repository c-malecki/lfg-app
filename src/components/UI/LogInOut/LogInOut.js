import React, { useContext } from "react";
import { UsersState, UsersDispatch } from "../../../contexts/context_index";
import { ButtonLink, GeneralButton } from "../../components_index";

// redux
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/user-actions";

export const LogInOut = (props) => {
  const { isLoggedIn } = useContext(UsersState);
  const dispatch = useContext(UsersDispatch);
  const reduxDispatch = useDispatch();
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    reduxDispatch(logoutUser());
  };
  return (
    <div className="LogInOut-container">
      {isLoggedIn ? (
        <span>
          <GeneralButton
            method={handleLogOut}
            text="log out"
            addClass="general-theme-button"
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
