import React from "react";
import { MessageBody } from "../MessageBody/MessageBody";

export const Inbox = (props) => {
  return (
    <div className="Inbox-container">
      {props.messages.map((message) => {
        return (
          <MessageBody
            from={message.from_username}
            date={message.date_received}
            content={message.content}
            key={`message-${message.message_id}-${message.from_username}`}
          />
        );
      })}
    </div>
  );
};
