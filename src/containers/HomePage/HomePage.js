import React from "react";
import { RecentPosts, NewPostLink } from "../../components/components_index";

export const HomePage = (props) => {
  return (
    <div className="HomePage-container">
      <RecentPosts />
      <NewPostLink />
    </div>
  );
};
