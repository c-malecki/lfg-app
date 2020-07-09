import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from "../action-types";

const initialState = {
  loggedIn: false,
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOGIN_USER_SUCCESS: {
      const user = action.payload;
      return {
        loggedIn: true,
        currentUser: user,
        loading: false,
        error: null,
      };
    }
    case LOGIN_USER_FAIL: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error: error,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        loggedIn: false,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};
