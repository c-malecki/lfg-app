import React from "react";
import { MessagePreview } from "../MessagePreview/MessagePreview";

export const SentMessages = (props) => {
  return (
    <div className="SentMessages-container">
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
              />
            );
          })}
        </>
      ) : (
        <span>No sent messages.</span>
      )}
    </div>
  );
};
