import React from "react";

export const Comments = (props) => {
  const { comments } = props;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.date}
            {comment.user_name}
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};
