import React from "react";
import { Link } from "react-router-dom";

export const PostTagLink = (props) => {
  return (
    <Link to={`/posts/tags/${props.tag}`} className="PostTag-link">
      #{props.text}
    </Link>
  );
};
