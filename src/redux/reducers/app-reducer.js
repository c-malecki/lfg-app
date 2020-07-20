import { OPEN_MOBILE_TOOLS, TOGGLE_THEME } from "../action-types";

const initialState = {
  openMobileTools: false,
  isDarkTheme: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MOBILE_TOOLS: {
      return {
        ...state,
        openMobileTools: !state.openMobileTools,
      };
    }
    case TOGGLE_THEME: {
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    }
    default:
      return state;
  }
};
