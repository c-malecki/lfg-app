import React from "react";
import { GeneralLink } from "../../components_index";

export const MessageBody = (props) => {
  const { message } = props;
  return (
    <div className="MessageBody-container">
      <span className="head-text-content">
        {message.sender === false ? "From" : "To"}
      </span>
      <GeneralLink
        url={`/users/${
          message.sender === false ? message.from_username : message.to_username
        }`}
        text={
          message.sender === false ? message.from_username : message.to_username
        }
        addClass="UserLink"
      />
      <span className="head-text-content">at {message.date_sent}</span>
      <span className="head-text-content" style={{ fontWeight: "bold" }}>
        {message.sender === true
          ? message.read === false
            ? "unread"
            : "read"
          : ""}
      </span>
      <h3>{message.subject}</h3>
      <p>{message.content}</p>
    </div>
  );
};
