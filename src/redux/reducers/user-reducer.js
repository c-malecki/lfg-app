import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_WIDGET_BEGIN,
  FETCH_WIDGET_SUCCESS,
  FETCH_WIDGET_FAIL,
} from "../action-types";

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  isLoading: false,
  error: null,
  widgets: {
    isLoading: false,
    error: null,
    posts: null,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case LOGIN_USER_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        currentUser: user,
        isLoading: false,
        error: null,
      };
    }
    case LOGIN_USER_FAIL: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: action.payload,
      };
    }
    case FETCH_WIDGET_BEGIN: {
      return {
        ...state,
        widgets: {
          ...state.widgets,
          isLoading: true,
          error: null,
        },
      };
    }
    case FETCH_WIDGET_SUCCESS: {
      return {
        ...state,
        widgets: {
          isLoading: false,
          error: null,
          posts: action.payload,
        },
      };
    }
    case FETCH_WIDGET_FAIL: {
      return {
        ...state,
        widgets: {
          ...state.widgets,
          isLoading: false,
          error: action.payload.error,
        },
      };
    }
    default:
      return state;
  }
};
