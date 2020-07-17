import React from "react";
import { GeneralLink } from "../../components_index";
import { utilPostPreviewText } from "../../../assets/util/textHelpers";
import { useSelector } from "react-redux";

export const PostPreview = (props) => {
  const { post } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`PostPreview-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <div className="PostPreview-head">
        <GeneralLink
          url={`/g/${post.posted_in}/posts`}
          text={`g/${post.posted_in}`}
          addClass="in-text-link"
        />
        <span className="head-text-content">By</span>
        <GeneralLink
          url={`/users/${post.post_author}`}
          text={post.post_author}
          addClass="in-text-link"
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
              addClass={`${
                isDarkTheme ? "comments-tags-dark" : "comments-tags-light"
              }`}
            />
          ))}
        </span>
        <GeneralLink
          url={`/g/${post.posted_in}/posts/${post.post_id}`}
          text={post.post_title}
          addClass="large-link"
        />
        <GeneralLink
          url={`/g/${post.posted_in}/posts/${post.post_id}`}
          text={
            post.post_content.length > 60
              ? `${utilPostPreviewText(post.post_content)}...`
              : post.post_content
          }
          addClass={`${isDarkTheme ? "text-link-s-dark" : "text-link-s-light"}`}
        />
        <span className="PostPreview-comments">
          <GeneralLink
            url={`/g/${post.posted_in}/posts/${post.post_id}`}
            text={`${post.comments.length} comments`}
            addClass={`${
              isDarkTheme ? "comments-tags-dark" : "comments-tags-light"
            }`}
          />
        </span>
      </div>
    </div>
  );
};
