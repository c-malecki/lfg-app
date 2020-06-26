import React, { createContext, useReducer, useEffect } from "react";
import { users } from "../dumbydata/sample_user";

export const UsersState = createContext();
export const UsersDispatch = createContext();

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  allUsers: users,
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEMO_USER": {
      return { ...state, isLoggedIn: true, currentUser: action.demoUser };
    }
    case "LOGIN": {
      return { ...state, isLoggedIn: true, currentUser: action.userData };
    }
    case "LOGOUT": {
      return { ...state, isLoggedIn: false, currentUser: null };
    }
    case "UPDATE_BIO": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.user_name
      );
      const newAllUsers = [...allUsers];
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        profile: {
          ...newAllUsers[idx].profile,
          bio: action.bio,
        },
      };
      return { ...state, allUsers: newAllUsers, currentUser: newAllUsers[idx] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  useEffect(() => {
    dispatch({ type: "SET_DEMO_USER", demoUser: users[0] });
  }, []);
  return (
    <UsersState.Provider value={state}>
      <UsersDispatch.Provider value={dispatch}>
        {children}
      </UsersDispatch.Provider>
    </UsersState.Provider>
  );
};
