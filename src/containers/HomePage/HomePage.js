import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/index";
import styles from "./HomePage.module.scss";

export const HomePage = (props) => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.HomePageContainer} ${
        isLightTheme ? "" : styles.dark
      }`}
    ></div>
  );
};
