import React from "react";
import Logo from "../../../assets/images/LFGwithicon.png";
import { useSelector } from "react-redux";

export const WidgetLoader = () => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="WidgetLoader-container">
      <div
        className={`${
          isDarkTheme ? "WidgetLoader-dark" : "WidgetLoader-light"
        }`}
      >
        <img src={Logo} alt="LFG logo" />
      </div>
    </div>
  );
};
