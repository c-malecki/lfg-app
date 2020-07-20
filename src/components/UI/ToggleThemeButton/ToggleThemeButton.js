import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const ToggleThemeButton = (props) => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  return (
    <div
      className={`ToggleThemeButton-container ${
        isDarkTheme ? "toggle-button-light" : "toggle-button-dark"
      }`}
    >
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {isDarkTheme ? "Light" : "Dark"}
      </button>
    </div>
  );
};
