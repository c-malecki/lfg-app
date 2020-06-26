import React from "react";
import { GeneralLink } from "../components_index";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="PostPreview-container">
      <div className="PostPreview-head">
        <span className="head-text-content">By</span>
        <GeneralLink
          url={`/users/${post.author}`}
          text={post.author}
          addClass="PostHeadLink"
        />
        <span className="head-text-content">at {post.date}</span>
        {post.group ? (
          <>
            <span className="head-text-content">in</span>
            <GeneralLink
              url={`/groups/${post.group}`}
              text={post.group}
              addClass="PostHeadLink"
            />
          </>
        ) : null}
      </div>
      <div className="PostPreview-content">
        <span className="PostPreview-tags">
          {post.tags.map((tag) => (
            <GeneralLink
              url={`/posts/tags/${tag}`}
              key={`${post.title}-${tag}`}
              text={`#${tag}`}
              addClass="PostTag-link "
            />
          ))}
        </span>
        <GeneralLink
          url={`/posts/${post.post_id}`}
          text={post.title}
          addClass="PostLink"
        />
      </div>
    </div>
  );
};
