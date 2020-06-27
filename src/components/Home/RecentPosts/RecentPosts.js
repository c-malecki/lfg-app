import React, { useContext } from "react";
import { PostsStateContext } from "../../../contexts/context_index";
import { PostPreview } from "../../components_index";

export const RecentPosts = (props) => {
  const { posts } = useContext(PostsStateContext);
  return (
    <div className="RecentPosts-container">
      <h2>Recent Posts</h2>
      {posts ? (
        posts.map((post) => {
          return <PostPreview post={post} key={`post-${post.post_id}`} />;
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
