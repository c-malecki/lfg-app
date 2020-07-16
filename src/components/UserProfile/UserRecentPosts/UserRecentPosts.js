import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";

export const UserRecentPosts = (props) => {
  const { userForPageUsername, userForPagePosts } = props;
  return (
    <div className="UserRecentPosts-container">
      <div className="component-head">
        <h3>Posts</h3>
        <GeneralLink url={`${userForPageUsername}/posts`} text="See All" />
      </div>

      {userForPagePosts.map((p) => {
        return <PostPreview post={p} key={p.post_id} />;
      })}
    </div>
  );
};
