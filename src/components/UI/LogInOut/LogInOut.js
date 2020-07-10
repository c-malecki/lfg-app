import React from "react";
import { ButtonLink, GeneralButton } from "../../components_index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/user-actions";

export const LogInOut = (props) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
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
