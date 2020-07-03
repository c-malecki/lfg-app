import React, { createContext, useReducer } from "react";

export const AppState = createContext();
export const AppDispatch = createContext();

const initialState = {
  openMobilePageNav: false,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MOBILE_PAGE_NAV": {
      return { openMobilePageNav: !state.openMobilePageNav };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppState.Provider>
  );
};
