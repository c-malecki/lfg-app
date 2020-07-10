import React from "react";
import { MessagePreview } from "../MessagePreview/MessagePreview";

export const Unread = (props) => {
  const { messages } = props;
  return (
    <div className="Unread-container">
      {messages.length > 0 ? (
        <>
          {messages.map((message) => {
            return (
              <MessagePreview
                from={message.original_sender.username}
                to={message.original_receiver.username}
                date={message.date_started}
                subject={message.message_subject}
                key={message.message_thread_id}
                id={message.message_thread_id}
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
