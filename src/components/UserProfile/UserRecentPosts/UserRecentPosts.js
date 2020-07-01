import React, { useContext, useState, useEffect } from "react";
import { PostsStateContext } from "../../../contexts/context_index";
import { PostPreview, GeneralLink } from "../../components_index";

export const UserRecentPosts = (props) => {
  const [postsByUser, setPostsByUser] = useState(null);
  const { posts } = useContext(PostsStateContext);
  const user = props.username;
  useEffect(() => {
    if (posts) {
      const findPosts = posts.filter((p) => p.author === user);
      setPostsByUser(findPosts);
    }
  }, [posts, user]);
  return (
    <div className="UserRecentPosts-container">
      <h3 className="page-heading">{user}'s Recent Posts</h3>
      <GeneralLink url={`${user}/posts`} text="see all" />
      {postsByUser ? (
        <>
          {postsByUser.map((post) => {
            return <PostPreview post={post} key={`post-${post.post_id}`} />;
          })}
        </>
      ) : (
        <span>...loading</span>
      )}
    </div>
  );
};
