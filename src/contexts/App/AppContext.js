import React, { createContext, useReducer } from "react";
import { users } from "../dumbydata/sample_user";

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

const initialState = {
  isLoggedIn: true,
  currentUser: users[0],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { isLoggedIn: true, currentUser: action.userData };
    }
    case "LOGOUT": {
      return { isLoggedIn: false, currentUser: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
