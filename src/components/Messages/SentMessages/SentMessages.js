import React from "react";
import { MessageBody } from "../MessageBody/MessageBody";

export const SentMessages = (props) => {
  return (
    <div className="SentMessages-container">
      {props.messages.map((message) => {
        return (
          <MessageBody
            to={message.to_username}
            date={message.date_sent}
            content={message.content}
            key={`message-${message.message_id}-${message.to_username}`}
          />
        );
      })}
    </div>
  );
};
