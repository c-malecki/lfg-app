import React from "react";
import { GeneralLink } from "../../components_index";
import { utilPostPreviewText } from "../../../assets/util/textHelpers";

export const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="PostPreview-container">
      <div className="PostPreview-head">
        {post.posted_in ? (
          <>
            <GeneralLink
              url={`/g/${post.posted_in}/posts`}
              text={`g/${post.posted_in}`}
              addClass="PostPreviewHeadLink"
            />
          </>
        ) : null}
        <span className="head-text-content">By</span>
        <GeneralLink
          url={`/users/${post.post_author}`}
          text={post.post_author}
          addClass="PostPreviewHeadLink"
        />
        <span className="head-text-content">at {post.date_posted}</span>
      </div>
      <div className="PostPreview-content">
        <span className="PostPreview-tags">
          {post.post_tags.map((tag) => (
            <GeneralLink
              url={`/posts/tags/${tag}`}
              key={`${post.post_title}-${tag}`}
              text={`#${tag}`}
              addClass="PostPreviewBodyLink"
            />
          ))}
        </span>
        <GeneralLink
          url={`/g/${post.posted_in}/posts/${post.post_id}`}
          text={post.post_title}
          addClass="PostLink"
        />
        <GeneralLink
          url={`/g/${post.posted_in}/posts/${post.post_id}`}
          text={
            post.post_content.length > 60
              ? `${utilPostPreviewText(post.post_content)}...`
              : post.post_content
          }
          addClass="PostPreviewText"
        />
        <span className="PostPreview-comments">
          <GeneralLink
            url={`/g/${post.posted_in}/posts/${post.post_id}`}
            text={`${post.comments.length} comments`}
            addClass="PostPreviewBodyLink"
          />
        </span>
      </div>
    </div>
  );
};
