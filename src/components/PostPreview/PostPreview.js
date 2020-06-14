import React from "react";
import { UserLink, PostLink } from "../components_index";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div>
      <PostLink title={post.title} id={post.post_id} />
      <div>
        {post.date}
        <UserLink username={post.author} />
      </div>
    </div>
  );
};
