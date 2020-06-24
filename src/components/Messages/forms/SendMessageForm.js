import React, { useState, useContext } from "react";
import { GeneralButton } from "../../components_index";
import {
  UsersDispatch,
  AppStateContext,
} from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";

export const SendMessageForm = (props) => {
  const [formState, setFormState] = useState({
    subject: "",
    message: "",
  });

  const dispatch = useContext(UsersDispatch);
  const { currentUser } = useContext(AppStateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = reformatDate(new Date());
    dispatch({
      type: "SEND_MESSAGE",
      from: currentUser.account.user_name,
      sent_message: {
        to_username: props.toUser,
        date_sent: date,
        subject: formState.subject,
        content: formState.message,
        message_id: "2",
      },
    });
    dispatch({
      type: "RECEIVE_MESSAGE",
      to: props.toUser,
      received_message: {
        read: false,
        from_username: currentUser.account.user_name,
        date_received: date,
        subject: formState.subject,
        content: formState.message,
        message_id: "2",
      },
    });
  };

  return (
    <div className="SendMessageForm-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="SendMessageForm-subject-container">
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, subject: e.target.value })
            }
            name="subject"
            className="SendMessageForm-subject-input"
            placeholder="Subject..."
            value={formState.subject}
          />
        </div>
        <div className="SendMessageForm-content-container">
          <textarea
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            name="send-message"
            className="SendMessageForm-content-input"
            type="text"
            value={formState.message}
          />
        </div>
        <div className="SendMessageForm-submit-container">
          <GeneralButton
            type="submit"
            addClass="general-theme-button"
            text="send"
          />

          <GeneralButton text="cancel" addClass="close-delete-button" />
        </div>
      </form>
    </div>
  );
};
