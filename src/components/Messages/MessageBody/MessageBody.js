import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const MessageBody = (props) => {
  const { message } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`MessageBody-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <h3>{message.message_subject}</h3>
      <span className="head-text-content">From</span>
      <GeneralLink
        url={`/users/${message.original_sender.username}`}
        text={message.original_sender.username}
        addClass="in-text-link"
      />
      <span className="head-text-content">to</span>
      <GeneralLink
        url={`/users/${message.original_receiver.username}`}
        text={message.original_receiver.username}
        addClass="in-text-link"
      />
      <span className="head-text-content">at {message.date_started}</span>
      <p>{message.original_content}</p>
    </div>
  );
};
