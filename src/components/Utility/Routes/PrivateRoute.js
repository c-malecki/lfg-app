import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { isLoggedIn, currentUser } = useSelector((state) => state.userReducer);
  const { username } = currentUser;
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};
