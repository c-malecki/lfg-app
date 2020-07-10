import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  GeneralLink,
  PopUpConfirm,
  GeneralButton,
} from "../../components_index";

export const PostBody = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { content, currentUser } = props;

  const history = useHistory();
  return (
    <div className="PostBody-container">
      <div className="PostBody-head">
        <h3 className="post-title-heading">{content.post_title}</h3>
        {currentUser.username === content.post_author ? (
          <span>
            <GeneralButton
              text="X"
              method={() => setShowConfirm(true)}
              addClass="form-delete-button"
            />
          </span>
        ) : null}
      </div>
      {showConfirm ? (
        <PopUpConfirm
          message="Are you sure you want to delete this post?"
          cancel={() => setShowConfirm(false)}
          ok={() => {
            // redux dispatch for delete post request
            history.push("/post-deleted");
          }}
        />
      ) : null}
      <span className="head-text-content">By</span>
      <GeneralLink
        url={`/users/${content.post_author}`}
        text={content.post_author}
        addClass="UserLink"
      />
      <span className="head-text-content">at {content.date_posted}</span>
      {content.post_tags.map((tag) => (
        <GeneralLink
          url={`/posts/tags/${tag}`}
          key={`${content.title}-${tag}`}
          text={`#${tag}`}
          addClass="PostTag-link "
        />
      ))}
      <p>{content.post_content}</p>
    </div>
  );
};
