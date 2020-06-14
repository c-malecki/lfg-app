import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/context_index";
import { PostBody } from "./PostBody/PostBody";
import { Comments } from "./Comments/Comments";

export const Post = (props) => {
  const [postContent, setPostContent] = useState(null);
  const { allUsers } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    const posts = allUsers.map((user) => user.posts).flat();
    const postForPage = posts.find((post) => post.post_id === id);
    setPostContent(postForPage);
  }, []);

  return (
    <div>
      {postContent !== null ? (
        <>
          <PostBody content={postContent} />
          <Comments comments={postContent.comments} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
