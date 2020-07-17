import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const UserRecentPosts = (props) => {
  const { userForPageUsername, userForPagePosts } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="UserRecentPosts-container">
      <div
        className={`${
          isDarkTheme ? "component-head-dark" : "component-head-light"
        }`}
      >
        <h3>Posts</h3>
        <GeneralLink url={`${userForPageUsername}/posts`} text="See All" />
      </div>

      {userForPagePosts.map((p) => {
        return <PostPreview post={p} key={p.post_id} />;
      })}
    </div>
  );
};
