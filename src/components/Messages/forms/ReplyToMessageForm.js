import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  PostsDispatchContext,
  UsersState,
} from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";

export const ReplyToMessageForm = (props) => {
  const [formState, setFormState] = useState({
    message: "",
    isSubmitting: false,
    openForm: false,
  });

  const { currentUser } = useContext(UsersState);
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
    }, 2000);
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
      comment_id: uuidv4(),
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
