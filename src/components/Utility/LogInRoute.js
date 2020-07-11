import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const LogInRoute = (props) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};
