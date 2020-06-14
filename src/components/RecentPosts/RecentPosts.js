import React, { useContext } from "react";
import { AppContext } from "../../contexts/context_index";
import { PostPreview } from "../components_index";

export const RecentPosts = (props) => {
  const { allUsers } = useContext(AppContext);
  return (
    <div>
      <h2>Recent Posts</h2>
      {allUsers.map((user) => {
        return user.posts.map((post) => {
          return <PostPreview post={post} key={`post-${post.post_id}`} />;
        });
      })}
    </div>
  );
};
