import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const GroupNewPosts = (props) => {
  const { group, posts } = props;
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  return (
    <div className="GroupPosts-container">
      <div className="GroupPosts-head">
        <h3 className="component-heading">New {group} Posts</h3>
      </div>
      <GeneralLink
        url={`${group}/posts`}
        text="see all"
        addClass="PageContentLink"
      />
      {isLoggedIn ? (
        <GeneralLink
          url={`/g/${group}/newpost`}
          text="new post"
          addClass="general-theme-link"
        />
      ) : null}
      {posts.map((p) => {
        return <PostPreview post={p} key={`post-${p.post_id}`} />;
      })}
    </div>
  );
};
