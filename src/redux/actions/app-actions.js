import {
  OPEN_CURRENT_USER,
  OPEN_MOBILE_PAGE_NAV,
  OPEN_USER_ACTIONS,
  OPEN_YOUR_GROUPS,
  OPEN_YOUR_POSTS,
  TOGGLE_THEME,
} from "../action-types";

export const openMobilePageNav = () => ({
  type: OPEN_MOBILE_PAGE_NAV,
});

export const openUserActions = () => ({
  type: OPEN_USER_ACTIONS,
});

export const openCurrentUser = () => ({
  type: OPEN_CURRENT_USER,
});

export const openYourGroups = () => ({
  type: OPEN_YOUR_GROUPS,
});

export const openYourPosts = () => ({
  type: OPEN_YOUR_POSTS,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
