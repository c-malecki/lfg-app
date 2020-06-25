import React from "react";
import { GeneralLink, PostLink, PostTagLink } from "../components_index";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="PostPreview-container">
      <div className="PostPreview-head">
        <span className="head-text-content">By</span>
        <GeneralLink
          url={`/users/${post.author}`}
          text={post.author}
          addClass="UserLink"
        />
        <span className="head-text-content">at {post.date}</span>
      </div>
      <div className="PostPreview-content">
        <span className="PostPreview-tags">
          {post.tags.map((tag) => (
            <PostTagLink tag={tag} text={tag} key={`${post.title}-${tag}`} />
          ))}
        </span>
        <PostLink title={post.title} id={post.post_id} />
      </div>
    </div>
  );
};
