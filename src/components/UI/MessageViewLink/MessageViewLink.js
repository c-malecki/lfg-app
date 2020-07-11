import React from "react";
import { Link } from "react-router-dom";

export const MessageViewLink = (props) => {
  return (
    <Link
      to={`/messages/message/${props.id}`}
      className={`MessageViewLink ${props.addClass}`}
      onClick={props.method ? () => props.method() : null}
    >
      {props.subject}
    </Link>
  );
};
