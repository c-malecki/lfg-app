import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsStateContext, UsersState } from "../../contexts/context_index";
import { PostBody } from "../../components/Post/PostBody/PostBody";
import { Comments } from "../../components/Post/Comments/Comments";
import { CommentForm } from "../../components/Post/CommentForm/CommentForm";

export const PostPage = (props) => {
  const [postContent, setPostContent] = useState(null);
  const { posts } = useContext(PostsStateContext) || null;
  const { currentUser } = useContext(UsersState) || null;
  const { id } = useParams();
  useEffect(() => {
    if (posts !== null && posts !== undefined) {
      const postForPage = posts.find((post) => post.post_id === id);
      setPostContent(postForPage);
    } else {
      setPostContent(null);
    }
  }, [posts, id]);

  return (
    <div className="PostPage-container">
      <div className="PostPage-content">
        {postContent !== null ? (
          <>
            <PostBody content={postContent} />
            <Comments
              comments={postContent.comments}
              post_id={postContent.post_id}
            />
            {currentUser !== null ? (
              <CommentForm post_id={postContent.post_id} />
            ) : (
              ""
            )}
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};
