import React from "react";
import { useHistory } from "react-router-dom";

export const PostPreview = (props) => {
  const { post } = props;
  const history = useHistory();
  const navigateToPost = () => {
    history.push({
      pathname: "/post",
      state: post,
    });
  };
  return (
    <div onClick={() => navigateToPost(post)}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};
