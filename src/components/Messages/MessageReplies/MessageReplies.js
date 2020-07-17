import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const MessageReplies = (props) => {
  const { reply } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`MessageReplies-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <GeneralLink
        url={`/users/${reply.username}`}
        text={reply.username}
        addClass="in-text-link"
      />
      <span className="head-text-content">at {reply.date_sent}</span>

      <p>{reply.message}</p>
    </div>
  );
};
