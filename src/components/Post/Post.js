import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsStateContext } from "../../contexts/context_index";
import { PostBody } from "./PostBody/PostBody";
import { Comments } from "./Comments/Comments";
import { CommentForm } from "./CommentForm/CommentForm";

export const Post = (props) => {
  const [postContent, setPostContent] = useState(null);
  const { posts } = useContext(PostsStateContext) || null;
  const { id } = useParams();
  useEffect(() => {
    if (posts !== null) {
      const postForPage = posts.find((post) => post.post_id === id);
      setPostContent(postForPage);
    } else {
      setPostContent(null);
    }
  }, [posts, id]);

  return (
    <div className="Post-container">
      {postContent !== null ? (
        <>
          <PostBody content={postContent} />
          <Comments
            comments={postContent.comments}
            post_id={postContent.post_id}
          />
          <CommentForm post_id={postContent.post_id} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
