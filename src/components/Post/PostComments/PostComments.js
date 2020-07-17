import React, { useState } from "react";
import { PopUpConfirm, Comment } from "../../components_index";
import Axios from "axios";

export const PostComments = (props) => {
  const [showConfirm, setShowConfirm] = useState({
    show: false,
    comment: null,
    message: "",
  });
  const handleClosePopup = () => {
    setShowConfirm({
      show: false,
      comment: null,
      message: "",
    });
  };
  const { comments, post_id, currentUser, deleteComment } = props;
  return (
    <div className="PostComments-container">
      {showConfirm.show ? (
        <PopUpConfirm
          message={showConfirm.message}
          cancel={() => handleClosePopup()}
          ok={() => {
            Axios.post(
              `${process.env.REACT_APP_API_URL}/posts/ids/${post_id}/comments/${showConfirm.comment}/delete`
            )
              .then((res) => {
                console.log("Comment deleted.");
                deleteComment(showConfirm.comment);
              })
              .catch((error) => console.log(error.message));
            handleClosePopup();
          }}
        />
      ) : null}

      {comments.map((c) => {
        return (
          <Comment
            username={c.username}
            date_posted={c.date_posted}
            currentUser={currentUser}
            comment_id={c.comment_id}
            comment_content={c.comment_content}
            buttonMethod={setShowConfirm}
            key={c.comment_id}
          />
        );
      })}
    </div>
  );
};
