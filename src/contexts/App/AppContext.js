import React, { createContext, useReducer } from "react";

export const AppState = createContext();
export const AppDispatch = createContext();

const initialState = {
  openMobilePageNav: false,
  openUserActions: false,
  openYourPosts: false,
  openYourGroups: false,
  openCurrentUser: false,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MOBILE_PAGE_NAV": {
      return { ...state, openMobilePageNav: !state.openMobilePageNav };
    }
    case "OPEN_USER_ACTIONS": {
      if (state.openUserActions === true) {
        return {
          ...state,
          openUserActions: false,
          openYourGroups: false,
          openYourPosts: false,
          openCurrentUser: false,
        };
      } else {
        return { ...state, openUserActions: true };
      }
    }
    case "OPEN_YOUR_POSTS": {
      if (state.openYourGroups === true || state.openCurrentUser === true) {
        return {
          ...state,
          openYourGroups: false,
          openCurrentUser: false,
          openYourPosts: !state.openYourPosts,
        };
      } else {
        return { ...state, openYourPosts: !state.openYourPosts };
      }
    }
    case "OPEN_YOUR_GROUPS": {
      if (state.openYourPosts === true || state.openCurrentUser === true) {
        return {
          ...state,
          openYourPosts: false,
          openCurrentUser: false,
          openYourGroups: !state.openYourGroups,
        };
      } else {
        return { ...state, openYourGroups: !state.openYourGroups };
      }
    }
    case "OPEN_CURRENT_USER": {
      if (state.openYourPosts === true || state.openYourGroups === true) {
        return {
          ...state,
          openYourPosts: false,
          openYourGroups: false,
          openCurrentUser: !state.openCurrentUser,
        };
      } else {
        return {
          ...state,
          openCurrentUser: !state.openCurrentUser,
        };
      }
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
