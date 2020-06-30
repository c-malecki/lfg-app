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
        addClass=""
        method={() => {
          dispatch({
            type: "READ_MESSAGE",
            to: currentUser.user_name === props.to ? props.to : props.from,
            from: currentUser.user_name === props.from ? props.from : props.to,
            message_id: props.id,
          });
        }}
      />
      <div>
        <span className="head-text-content">
          {props.sender ? "To" : "From"}
        </span>
        <GeneralLink
          url={`/users/${props.sender ? props.to : props.from}`}
          text={props.sender ? props.to : props.from}
          addClass="UserLink"
        />
        <span className="head-text-content">at {props.date}</span>
      </div>
      {props.unread_reply ? (
        <span>({props.total_unread_replies}) new replies</span>
      ) : null}
    </div>
  );
};
