import React from "react";
import { GeneralButton, GeneralLink } from "../../components_index";

export const Comment = (props) => {
  const {
    buttonMethod,
    username,
    date_posted,
    currentUser,
    comment_id,
    comment_content,
  } = props;
  return (
    <div className="Comment-container">
      <span className="head-text-content">By</span>
      <GeneralLink
        url={`/users/${username}`}
        text={username}
        addClass="UserLink"
      />
      <span className="head-text-content">at {date_posted}</span>
      {currentUser !== null && currentUser.username === username ? (
        <GeneralButton
          method={() =>
            buttonMethod({
              show: true,
              comment: comment_id,
              message: "Are you sure you want to delete this comment?",
            })
          }
          addClass="form-delete-button"
          text="X"
        />
      ) : null}
      <p>{comment_content}</p>
    </div>
  );
};
