import React, { useContext } from "react";
import styles from "../../styles/index.module.scss";
import { ToggleSwitch, LogInOut } from "../index";
import { ThemeContext } from "../../contexts/index";

export const Header = (props) => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return (
    <div className={styles.headerContainer}>
      <ToggleSwitch method={toggleTheme} boolean={isLightTheme} />
      <LogInOut />
    </div>
  );
};
