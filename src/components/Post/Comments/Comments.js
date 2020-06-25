import React, { useContext } from "react";
import { GeneralLink } from "../../components_index";
import {
  UsersState,
  PostsDispatchContext,
} from "../../../contexts/context_index";

export const Comments = (props) => {
  const { comments, post_id } = props;
  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);
  return (
    <div className="Comments-container">
      <h4>Comments</h4>
      {comments.map((comment) => {
        return (
          <div className="Comment-content" key={comment.comment_id}>
            <span className="head-text-content">By</span>
            <GeneralLink
              url={`/users/${comment.user_name}`}
              text={comment.user_name}
              addClass="UserLink"
            />
            <span className="head-text-content">at {comment.date}</span>
            {currentUser !== null &&
            currentUser.account.user_name === comment.user_name ? (
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_COMMENT",
                    post_id: post_id,
                    comment_id: comment.comment_id,
                  })
                }
                className="close-delete-button"
              >
                X
              </button>
            ) : (
              ""
            )}
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};
