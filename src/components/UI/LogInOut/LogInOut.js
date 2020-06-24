import React, { useContext } from "react";
import {
  AppStateContext,
  AppDispatchContext,
} from "../../../contexts/context_index";
import { ButtonLink } from "../../components_index";

export const LogInOut = (props) => {
  const { isLoggedIn } = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
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
            addClass="header-buttonlink"
            s
          />
        </span>
      ) : (
        <span>
          <ButtonLink url="/login" text="log in" addClass="header-buttonlink" />
        </span>
      )}
    </div>
  );
};
