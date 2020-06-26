import React from "react";
import { RecentPosts, JoinedGroups } from "../../components/components_index";

export const HomePage = (props) => {
  return (
    <div className="HomePage-container">
      <div className="HomePage-content">
        <div className="HomePage-content-col1">
          <RecentPosts />
        </div>
        <div className="HomePage-content-col2">
          <JoinedGroups />
        </div>
      </div>
    </div>
  );
};
