import React from "react";
import { RecentPosts, JoinedGroups } from "../../components/components_index";

export const HomePage = (props) => {
  return (
    <div className="HomePage-container">
      <div className="Home-row1-col1">
        <RecentPosts />
      </div>
      <div className="Home-row1-col2">
        <JoinedGroups />
      </div>
      <div className="Home-row2-col1"></div>
    </div>
  );
};
