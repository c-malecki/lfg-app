import React from "react";
import { Post, Comments } from "../../components/index";

export const PostPage = (props) => {
  return (
    <div>
      <Post />
      <Comments />
    </div>
  );
};
