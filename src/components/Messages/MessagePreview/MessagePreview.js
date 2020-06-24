import React, { useContext } from "react";
import { UserLink, MessageViewLink } from "../../components_index";
import { UsersDispatch, UsersState } from "../../../contexts/context_index";

export const MessagePreview = (props) => {
  const dispatch = useContext(UsersDispatch);
  const { currentUser } = useContext(UsersState);
  return (
    <div className="MessagePreview-container">
      <MessageViewLink
        id={props.id}
        subject={props.subject}
        method={() =>
          dispatch({
            type: "READ_MESSAGE",
            user: currentUser.account.user_name,
            message_id: props.id,
          })
        }
      />
      <span className="head-text-content">{props.from ? "From" : "To"}</span>
      <UserLink username={props.from ? props.from : props.to} />
      <span className="head-text-content">at {props.date}</span>
    </div>
  );
};
