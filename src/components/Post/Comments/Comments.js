import React, { useState } from "react";
import {
  GeneralLink,
  GeneralButton,
  PopUpConfirm,
} from "../../components_index";
import Axios from "axios";

export const Comments = (props) => {
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
  const { comments, post_id, currentUser } = props;
  return (
    <div className="Comments-container">
      {showConfirm.show ? (
        <PopUpConfirm
          message={showConfirm.message}
          cancel={() => handleClosePopup()}
          ok={async () => {
            await Axios.post(
              `http://localhost:5000/api/v1/posts/ids/${post_id}/comments/${showConfirm.comment}/delete`
            )
              .then((res) => console.log("Comment deleted."))
              .catch((error) => console.log(error.message));
            handleClosePopup();
          }}
        />
      ) : null}
      <h4 className="comment-heading">Comments</h4>
      {comments.map((c) => {
        return (
          <div className="Comment-content" key={c.comment_id}>
            <span className="head-text-content">By</span>
            <GeneralLink
              url={`/users/${c.username}`}
              text={c.username}
              addClass="UserLink"
            />
            <span className="head-text-content">at {c.date_posted}</span>
            {currentUser !== null && currentUser.username === c.username ? (
              <GeneralButton
                method={() =>
                  setShowConfirm({
                    show: true,
                    comment: c.comment_id,
                    message: "Are you sure you want to delete this comment?",
                  })
                }
                addClass="form-delete-button"
                text="X"
              />
            ) : (
              ""
            )}
            <p>{c.comment_content}</p>
          </div>
        );
      })}
    </div>
  );
};
