import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/index";
import { TopRecentPosts } from '../../components/index';
import styles from "../../styles/index.module.scss"

export const HomePage = (props) => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.HomePageContainer} ${
        isLightTheme ? "" : styles.dark
      }`}
    >
      <TopRecentPosts />
    </div>
  );
};
