import React from "react";
import { GeneralLink } from "../../components_index";

export const MessageReplies = (props) => {
  const { reply } = props;
  return (
    <div className="MessageReplies-container">
      <GeneralLink
        url={`/users/${reply.user_name}`}
        text={reply.user_name}
        addClass="UserLink"
      />
      <span className="head-text-content">at {reply.date_sent}</span>

      <p>{reply.content}</p>
    </div>
  );
};
