import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_WIDGET_BEGIN,
  FETCH_WIDGET_SUCCESS,
  FETCH_WIDGET_FAIL,
} from "../action-types";
import axios from "axios";

const fetchUserBegin = () => ({
  type: LOGIN_USER_BEGIN,
});

const fetchUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const fetchUserFail = (error) => ({
  type: LOGIN_USER_FAIL,
  payload: error,
});

const fetchWidgetBegin = () => ({
  type: FETCH_WIDGET_BEGIN,
});

const fetchWidgetSuccess = (data) => ({
  type: FETCH_WIDGET_SUCCESS,
  payload: data,
});

const fetchWidgetFail = (error) => ({
  type: FETCH_WIDGET_FAIL,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const fetchUserForLogin = (user) => {
  const { username, password } = user;
  return (dispatch) => {
    dispatch(fetchUserBegin());
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/login?username=${username}&password=${password}`
      )
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
        dispatch(fetchWidgetAfterLogin(username));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error.response.data));
      });
  };
};

export const fetchDemoUser = () => {
  return (dispatch) => {
    dispatch(fetchUserBegin());
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/login?username=TestUser&password=password`
      )
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
        dispatch(fetchWidgetAfterLogin("TestUser"));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error.response.data));
      });
  };
};

const fetchWidgetAfterLogin = (user) => {
  return (dispatch) => {
    dispatch(fetchWidgetBegin());
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user}/posts`)
      .then((res) => dispatch(fetchWidgetSuccess(res.data)))
      .catch((error) => {
        dispatch(fetchWidgetFail(error));
      });
  };
};
