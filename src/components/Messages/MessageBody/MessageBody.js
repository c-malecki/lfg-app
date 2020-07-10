import React from "react";
import { GeneralLink } from "../../components_index";

export const MessageBody = (props) => {
  const { message } = props;
  return (
    <div className="MessageBody-container">
      <h3>{message.message_subject}</h3>
      <span className="head-text-content">From</span>
      <GeneralLink
        url={`/users/${message.original_sender.username}`}
        text={message.original_sender.username}
        addClass="UserLink"
      />
      <span className="head-text-content">to</span>
      <GeneralLink
        url={`/users/${message.original_receiver.username}`}
        text={message.original_receiver.username}
        addClass="UserLink"
      />
      <span className="head-text-content">at {message.date_started}</span>
      <p>{message.original_content}</p>
    </div>
  );
};
