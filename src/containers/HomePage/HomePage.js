import React from "react";
// import { ThemeContext } from "../../contexts/index";
import { RecentPosts } from "../../components/components_index";

export const HomePage = (props) => {
  // const { isLightTheme } = useContext(ThemeContext);
  return (
    <div className="HomePage-container">
      <RecentPosts />
    </div>
  );
};
