import React from "react";
import { useSelector } from "react-redux";

export const NoContent = (props) => {
  const { noContentMessage } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="noContent-container">
      <div
        className={`noContent-content ${
          isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
        }`}
      >
        {noContentMessage}
      </div>
    </div>
  );
};
