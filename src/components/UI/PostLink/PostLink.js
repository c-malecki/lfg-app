import React from "react";
import { Link } from "react-router-dom";

export const PostLink = (props) => {
  return (
    <Link to={`/posts/${props.id}`} className="PostLink">
      {props.title}
    </Link>
  );
};
