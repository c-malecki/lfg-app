import React from "react";
import { LogInForm, LfgMiniBanner } from "../../components/components_index";
import { useSelector } from "react-redux";

export const LogInPage = () => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`LogInPage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <div
        className={`LogInPage-content ${
          isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
        }`}
      >
        <LfgMiniBanner />
        <LogInForm />
      </div>
    </div>
  );
};
