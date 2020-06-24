import React from "react";
import { MessagePreview } from "../MessagePreview/MessagePreview";

export const Inbox = (props) => {
  return (
    <div className="Inbox-container">
      {props.messages.map((message) => {
        return (
          <MessagePreview
            from={message.from_username}
            date={message.date_received}
            subject={message.subject}
            key={message.message_id}
            id={message.message_id}
          />
        );
      })}
    </div>
  );
};
