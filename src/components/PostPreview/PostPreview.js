import React from "react";
import { GeneralLink } from "../components_index";
import { utilPostPreviewText } from "../../assets/util/textHelpers";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="PostPreview-container">
      <div className="PostPreview-head">
        {post.group ? (
          <>
            <GeneralLink
              url={`/g/${post.group}/posts`}
              text={`g/${post.group}`}
              addClass="PostPreviewHeadLink"
            />
          </>
        ) : null}
        <span className="head-text-content">By</span>
        <GeneralLink
          url={`/users/${post.author}`}
          text={post.author}
          addClass="PostPreviewHeadLink"
        />
        <span className="head-text-content">at {post.date}</span>
      </div>
      <div className="PostPreview-content">
        <span className="PostPreview-tags">
          {post.tags.map((tag) => (
            <GeneralLink
              url={`/posts/tags/${tag}`}
              key={`${post.title}-${tag}`}
              text={`#${tag}`}
              addClass="PostPreviewBodyLink"
            />
          ))}
        </span>
        <GeneralLink
          url={`/g/${post.group}/posts/${post.post_id}`}
          text={post.title}
          addClass="PostLink"
        />
        <GeneralLink
          url={`/g/${post.group}/posts/${post.post_id}`}
          text={
            post.content.length > 60
              ? `${utilPostPreviewText(post.content)}...`
              : post.content
          }
          addClass="PostPreviewText"
        />
        <span className="PostPreview-comments">
          <GeneralLink
            url={`/g/${post.group}/posts/${post.post_id}`}
            text={`${post.comments.length} comments`}
            addClass="PostPreviewBodyLink"
          />
        </span>
      </div>
    </div>
  );
};
