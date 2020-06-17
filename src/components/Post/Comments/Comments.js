import React from "react";
import { UserLink } from "../../components_index";

export const Comments = (props) => {
  const { comments } = props;
  return (
    <div className="Comments-container">
      <h4>Comments</h4>
      {comments.map((comment) => {
        return (
          <div className="Comment-content" key={comment.comment_id}>
            <span className="head-text-content">By</span>
            <UserLink username={comment.user_name} />
            <span className="head-text-content">at {comment.date}</span>
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};
