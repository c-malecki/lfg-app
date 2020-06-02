import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { ToggleSwitch } from "../index";
import { ThemeContext } from "../../contexts/index";

export const Header = (props) => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return (
    <div className={styles.headerContainer}>
      <ToggleSwitch method={toggleTheme} boolean={isLightTheme} />
    </div>
  );
};
