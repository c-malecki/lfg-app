import React from "react";
import { GeneralButton, GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const Comment = (props) => {
  const {
    buttonMethod,
    username,
    date_posted,
    currentUser,
    comment_id,
    comment_content,
  } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`Comment-container ${
        isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
      }`}
    >
      <span className="head-text-content">By</span>
      <GeneralLink
        url={`/users/${username}`}
        text={username}
        addClass="in-text-link"
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
