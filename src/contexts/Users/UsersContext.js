import React, { createContext, useReducer } from "react";
import { users } from "../dumbydata/sample_user";

export const UsersContext = createContext();
export const UsersDispatch = createContext();

const initialState = {
  allUsers: users,
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BIO": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.user_name
      );
      const newAllUsers = [...allUsers];
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        account: {
          ...newAllUsers[idx].account,
          bio: action.bio,
        },
      };
      return { allUsers: newAllUsers };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersContext.Provider value={state}>
      <UsersDispatch.Provider value={dispatch}>
        {children}
      </UsersDispatch.Provider>
    </UsersContext.Provider>
  );
};
