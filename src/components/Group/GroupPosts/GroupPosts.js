import React, { useEffect, useContext, useState } from "react";
import { PostsStateContext } from "../../../contexts/context_index";
import { PostPreview } from "../../components_index";

export const GroupPosts = (props) => {
  const [postsInGroup, setPostsInGroup] = useState(null);
  const { posts } = useContext(PostsStateContext);
  const name = props.groupName;
  useEffect(() => {
    const postsForPage = posts.filter((post) => post.group === name);
    setPostsInGroup(postsForPage);
  }, [name, posts]);
  return (
    <div className="GroupPosts-container">
      <h2>{name} Posts</h2>
      {postsInGroup ? (
        <>
          {postsInGroup.map((post) => {
            return <PostPreview post={post} key={`post-${post.post_id}`} />;
          })}
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};
