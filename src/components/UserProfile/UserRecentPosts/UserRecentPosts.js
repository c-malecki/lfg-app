import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";

export const UserRecentPosts = (props) => {
  const { username, posts } = props;
  return (
    <div className="UserRecentPosts-container">
      <h3 className="page-heading">{username}'s Recent Posts</h3>
      <GeneralLink
        url={`${username}/posts`}
        text="see all"
        addClass="PageContentLink"
      />
      {posts.map((p) => {
        return <PostPreview post={p} key={p.post_id} />;
      })}
    </div>
  );
};
