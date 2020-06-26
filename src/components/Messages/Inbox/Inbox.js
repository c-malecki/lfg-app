import React from "react";
import { MessagePreview } from "../MessagePreview/MessagePreview";

export const Inbox = (props) => {
  return (
    <div className="Inbox-container">
      {props.messages.map((message) => {
        return (
          <MessagePreview
            to={message.to_username}
            from={message.from_username}
            date={message.date_sent}
            subject={message.subject}
            key={message.message_id}
            id={message.message_id}
          />
        );
      })}
    </div>
  );
};
