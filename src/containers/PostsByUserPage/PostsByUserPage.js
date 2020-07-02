import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview } from "../../components/components_index";
import { PostsStateContext } from "../../contexts/context_index";

export const PostsByUserPage = (props) => {
  const [postsForPage, setPostsForPage] = useState(null);
  const { user } = useParams();
  const { posts } = useContext(PostsStateContext);
  useEffect(() => {
    if (posts) {
      const getPosts = posts.filter((p) => p.author === user);
      setPostsForPage(getPosts);
    }
  }, [posts, user]);
  return (
    <div className="PostsByUserPage-container">
      <div className="PostsByUserPage-content">
        <h2 className="page-heading">{user}'s Posts </h2>
        <span className="search-placeholder">search placeholder</span>
        {postsForPage ? (
          <>
            {postsForPage.map((post) => {
              return <PostPreview post={post} key={`post-${post.post_id}`} />;
            })}
          </>
        ) : (
          <span className="no-content-message">...loading</span>
        )}
      </div>
    </div>
  );
};
