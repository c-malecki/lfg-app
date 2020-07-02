import React from "react";
import { MessagePreview } from "../MessagePreview/MessagePreview";

export const Unread = (props) => {
  return (
    <div className="Unread-container">
      {props.messages.length > 0 ? (
        <>
          {props.messages.map((message) => {
            return (
              <MessagePreview
                to={message.to_username}
                from={message.from_username}
                date={message.date_sent}
                subject={message.subject}
                key={message.message_id}
                id={message.message_id}
                sender={message.sender}
                total_replies={message.total_replies}
                total_unread_replies={message.total_unread_replies}
                unread_reply={message.unread_reply}
              />
            );
          })}
        </>
      ) : (
        <div className="no-content-message">No unread messages.</div>
      )}
    </div>
  );
};
