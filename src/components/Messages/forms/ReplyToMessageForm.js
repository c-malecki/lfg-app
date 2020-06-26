import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { MessagesDispatch, UsersState } from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";

export const ReplyToMessageForm = (props) => {
  const [formState, setFormState] = useState({
    message: "",
    isSubmitting: false,
    openForm: false,
  });

  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(MessagesDispatch);

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
      user_name: currentUser.user_name,
      date_sent: date,
      content: formState.message,
      reply_id: uuidv4(),
    };
    dispatch({
      type: "REPLY_TO_MESSAGE",
      message_id: props.message_id,
      to: props.to,
      from: props.from,
      reply: data,
    });
    resetForm();
  };

  return (
    <div className="ReplyToMessage-container">
      <GeneralButton
        method={toggleForm}
        text="reply"
        addClass={formState.openForm ? "hide" : "general-theme-button"}
      />
      <div
        className={`ReplyToMessage-container ${
          formState.openForm ? "" : "hide"
        }`}
      >
        <form className="ReplyToMessage-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="ReplyToMessage-comment-container">
            <textarea
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              name="message"
              className="ReplyToMessage-comment-input"
              type="text"
              placeholder="Send a reply..."
              value={formState.message}
            />
          </div>
          <div className="ReplyToMessage-submit-container">
            <GeneralButton
              type="submit"
              addClass="general-theme-button"
              text="send"
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
