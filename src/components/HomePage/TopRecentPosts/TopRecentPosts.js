import React, { useContext } from "react";
import { AppContext } from "../../../contexts/App/AppContext";
import { PostPreview } from "../../index";

export const TopRecentPosts = (props) => {
  const { posts } = useContext(AppContext);
  return (
    <div>
      {posts.map((post) => {
        return <PostPreview post={post} key={`post-${post.id}`} />;
      })}
    </div>
  );
};
