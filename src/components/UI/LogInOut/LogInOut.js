import React from "react";
import { GeneralButton, GeneralLink } from "../../components_index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/user-actions";

export const LogInOut = (props) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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
            addClass={`${isDarkTheme ? "ui-button-dark" : "ui-button-light"}`}
          />
        </span>
      ) : (
        <span>
          <GeneralLink
            url="/login"
            text="log in"
            addClass={`${isDarkTheme ? "ui-link-dark " : "ui-link-light"}`}
          />
        </span>
      )}
    </div>
  );
};
