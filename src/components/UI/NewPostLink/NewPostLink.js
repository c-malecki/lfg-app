import React from "react";
import { Link } from "react-router-dom";

export const NewPostLink = (props) => {
  return (
    <Link to="/newpost" className="NewPostLink">
      New Post
    </Link>
  );
};
