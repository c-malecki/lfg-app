import React, { useContext } from "react";
import { RecentPosts, ButtonLink } from "../../components/components_index";
import { AppStateContext } from "../../contexts/context_index";

export const HomePage = (props) => {
  const { isLoggedIn } = useContext(AppStateContext);
  return (
    <div className="HomePage-container">
      <RecentPosts />
      {isLoggedIn ? (
        <ButtonLink url="/newpost" text="new post" addClass="page-buttonlink" />
      ) : (
        ""
      )}
    </div>
  );
};
