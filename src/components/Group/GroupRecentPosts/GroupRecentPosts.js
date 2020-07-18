import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";
import { utilComponentContent } from "../../../assets/util/utilComponentContent";

export const GroupRecentPosts = (props) => {
  const { group, posts } = props;
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const content = () => {
    return (
      <>
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
      </>
    );
  };
  const noContentMessage = `No posts in ${group} found.`;
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
      {utilComponentContent(posts, content, noContentMessage)}
    </div>
  );
};
