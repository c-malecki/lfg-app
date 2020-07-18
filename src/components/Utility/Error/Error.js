import React from "react";
import { useSelector } from "react-redux";

export const Error = (props) => {
  const { errorMessage } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="Error-container">
      <div
        className={`Error-content ${
          isDarkTheme ? "ui-content-dark" : "ui-content-light"
        }`}
      >
        {errorMessage}
      </div>
    </div>
  );
};
