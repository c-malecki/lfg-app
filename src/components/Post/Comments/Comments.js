import React, { useContext, useState } from "react";
import {
  GeneralLink,
  GeneralButton,
  PopUpConfirm,
} from "../../components_index";
import {
  UsersState,
  PostsDispatchContext,
} from "../../../contexts/context_index";

export const Comments = (props) => {
  const [showConfirm, setShowConfirm] = useState({
    show: false,
    dispatch: null,
    post: null,
    comment: null,
    message: "",
  });
  const handleClosePopup = () => {
    setShowConfirm({
      show: false,
      dispatch: null,
      post: null,
      comment: null,
      message: "",
    });
  };
  const { comments, post_id } = props;
  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);
  return (
    <div className="Comments-container">
      {showConfirm.show ? (
        <PopUpConfirm
          message={showConfirm.message}
          cancel={() => handleClosePopup()}
          ok={() => {
            dispatch({
              type: showConfirm.dispatch,
              post_id: showConfirm.post,
              comment_id: showConfirm.comment,
            });
            handleClosePopup();
          }}
        />
      ) : null}
      <h4 className="comment-heading">Comments</h4>
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
              <GeneralButton
                method={() =>
                  setShowConfirm({
                    show: true,
                    dispatch: "DELETE_COMMENT",
                    post: post_id,
                    comment: comment.comment_id,
                    message: "Are you sure you want to delete this comment?",
                  })
                }
                addClass="form-delete-button"
                text="X"
              />
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
