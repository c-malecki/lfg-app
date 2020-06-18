import React, { useState, useContext } from "react";
import { AppStateContext } from "../../../contexts/context_index";
import { PostsDispatchContext } from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";

export const CommentForm = (props) => {
  const [formState, setFormState] = useState({
    message: "",
    isSubmitting: false,
    openForm: false,
  });

  const { currentUser } = useContext(AppStateContext);
  const dispatch = useContext(PostsDispatchContext);

  const toggleForm = () => {
    const { openForm } = formState;
    setFormState((prevState) => ({ ...prevState, openForm: !openForm }));
  };

  const resetForm = () => {
    setFormState((prevState) => ({ ...prevState, message: "" }));
  };

  const submitDebounce = () => {
    setTimeout(function () {
      setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
    }, 3000);
  };

  const handleSubmit = (e) => {
    const date = reformatDate(new Date());
    e.preventDefault();
    setFormState((prevState) => ({ ...prevState, isSubmitting: true }));
    submitDebounce();
    const data = {
      user_name: currentUser.account.user_name,
      date: date,
      content: formState.message,
    };
    dispatch({ type: "ADD_COMMENT", post_id: props.post_id, comment: data });
    resetForm();
  };

  return (
    <div className="CommentForm-container">
      <GeneralButton
        method={toggleForm}
        text="comment"
        addClass={formState.openForm ? "hide" : "general-theme-button"}
      />
      <div
        className={`CommentForm-container ${formState.openForm ? "" : "hide"}`}
      >
        <form className="CommentForm-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="CommentForm-comment-container">
            <textarea
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              name="message"
              className="CommentForm-comment-input"
              type="text"
              placeholder="Leave a comment..."
              value={formState.message}
            />
          </div>
          <div className="CommentForm-submit-container">
            <GeneralButton
              type="submit"
              addClass="general-theme-button"
              text="comment"
              disabled={formState.isSubmitting}
            />

            <GeneralButton
              method={toggleForm}
              text="close"
              addClass="close-delete-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
