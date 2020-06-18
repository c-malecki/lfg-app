import React, { useContext } from "react";
import {
  AppStateContext,
  AppDispatchContext,
} from "../../../contexts/context_index";
import { UserLink, ButtonLink } from "../../components_index";

export const LogInOut = (props) => {
  const { currentUser, isLoggedIn } = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  // const handleLogIn = () => {
  //   history.push("/login");
  // };
  return (
    <div className="LogInOut-container">
      {isLoggedIn ? (
        <span>
          <UserLink username={currentUser.account.user_name} />
          <ButtonLink
            url="/"
            method={handleLogOut}
            text="log out"
            addClass="header-buttonlink"
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
