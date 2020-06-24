import React from "react";
import { Link } from "react-router-dom";

export const MessageUserLink = (props) => {
  return (
    <Link
      to={`/messages/new/to-${props.username}`}
      className={`MessageUserLink ${props.addClass}`}
    >
      message
    </Link>
  );
};
