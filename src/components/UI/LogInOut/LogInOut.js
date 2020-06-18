import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  AppStateContext,
  AppDispatchContext,
} from "../../../contexts/context_index";

export const LogInOut = (props) => {
  const { currentUser, isLoggedIn } = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  const history = useHistory();
  return (
    <div>
      {isLoggedIn ? (
        <span>
          {currentUser.account.user_name}
          <button
            onClick={async () => {
              await dispatch({ type: "LOGOUT" });
              history.push("/");
            }}
          >
            Log Out
          </button>
        </span>
      ) : (
        <span>
          <button onClick={() => history.push("/login")}>Log In</button>
        </span>
      )}
    </div>
  );
};
