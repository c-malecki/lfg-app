import React from "react";
import { useHistory } from "react-router-dom";

export const Comments = (props) => {
  const history = useHistory();
  const { comments } = history.location.state;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            {comment.user}
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};
