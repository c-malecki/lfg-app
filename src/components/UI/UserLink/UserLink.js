import React from "react";
import { Link } from "react-router-dom";

export const UserLink = (props) => {
  return (
    <Link to={`/users/${props.username}`} className="UserLink">
      {props.username}
    </Link>
  );
};
