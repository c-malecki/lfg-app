import React, { useContext } from "react";
import { RecentPosts, NewPostLink } from "../../components/components_index";
import { AppStateContext } from "../../contexts/context_index";

export const HomePage = (props) => {
  const { isLoggedIn } = useContext(AppStateContext);
  return (
    <div className="HomePage-container">
      <RecentPosts />
      {isLoggedIn ? <NewPostLink /> : ""}
    </div>
  );
};
