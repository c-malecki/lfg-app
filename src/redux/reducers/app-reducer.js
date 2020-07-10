import {
  OPEN_CURRENT_USER,
  OPEN_MOBILE_PAGE_NAV,
  OPEN_USER_ACTIONS,
  OPEN_YOUR_GROUPS,
  OPEN_YOUR_POSTS,
} from "../action-types";

const initialState = {
  openMobilePageNav: false,
  openUserActions: false,
  openYourPosts: false,
  openYourGroups: false,
  openCurrentUser: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MOBILE_PAGE_NAV: {
      return { ...state, openMobilePageNav: !state.openMobilePageNav };
    }
    case OPEN_USER_ACTIONS: {
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
    case OPEN_YOUR_POSTS: {
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
    case OPEN_YOUR_GROUPS: {
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
    case OPEN_CURRENT_USER: {
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
    default:
      return state;
  }
};
