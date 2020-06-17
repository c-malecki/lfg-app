import React from "react";
import { UserLink, PostLink } from "../components_index";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="PostPreview-container">
      <div className="PostPreview-head">
        <span className="head-text-content">By</span>
        <UserLink username={post.author} />
        <span className="head-text-content">at {post.date}</span>
      </div>
      <div className="PostPreview-content">
        <PostLink title={post.title} id={post.post_id} />
      </div>
    </div>
  );
};
