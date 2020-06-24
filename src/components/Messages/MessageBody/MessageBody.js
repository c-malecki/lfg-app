import React from "react";
import { UserLink } from "../../components_index";

export const MessageBody = (props) => {
  const { message } = props;
  return (
    <div className="MessageBody-container">
      <span className="head-text-content">
        {message.from_username ? "From" : "To"}
      </span>
      <UserLink
        username={
          message.from_username ? message.from_username : message.to_username
        }
      />
      <span className="head-text-content">
        at {message.date_received ? message.date_received : message.date_sent}
      </span>
      <h3>{message.subject}</h3>
      <p>{message.content}</p>
    </div>
  );
};
