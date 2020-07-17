import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const GroupRecentPosts = (props) => {
  const { group, posts } = props;
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="GroupRecentPosts-container">
      <div
        className={`${
          isDarkTheme ? "component-head-dark" : "component-head-light"
        }`}
      >
        <h3>Posts</h3>
        <GeneralLink url={`${group}/posts`} text="See All" />
      </div>
      {isLoggedIn ? (
        <GeneralLink
          url={`/g/${group}/newpost`}
          text="new post"
          addClass={`${isDarkTheme ? "ui-link-dark " : "ui-link-light"}`}
        />
      ) : null}
      {posts.map((p) => {
        return <PostPreview post={p} key={`post-${p.post_id}`} />;
      })}
    </div>
  );
};
