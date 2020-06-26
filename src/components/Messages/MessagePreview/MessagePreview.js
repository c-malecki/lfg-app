import React, { useContext } from "react";
import { GeneralLink, MessageViewLink } from "../../components_index";
import { MessagesDispatch, UsersState } from "../../../contexts/context_index";

export const MessagePreview = (props) => {
  const dispatch = useContext(MessagesDispatch);
  const { currentUser } = useContext(UsersState);
  return (
    <div className="MessagePreview-container">
      <MessageViewLink
        id={props.id}
        subject={props.subject}
        method={() => {
          if (currentUser.user_name === props.to) {
            dispatch({
              type: "READ_MESSAGE",
              to: props.to,
              from: props.from,
              message_id: props.id,
            });
          }
        }}
      />
      <span className="head-text-content">{props.from ? "From" : "To"}</span>
      <GeneralLink
        url={`/users/${props.from ? props.from : props.to}`}
        text={props.from ? props.from : props.to}
        addClass="UserLink"
      />
      <span className="head-text-content">at {props.date}</span>
    </div>
  );
};
