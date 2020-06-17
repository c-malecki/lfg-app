import React from "react";
import { Link } from "react-router-dom";

export const PostDeleted = () => {
  return (
    <div className="PostDelete-container">
      <span>Post successfully deleted.</span>
      <Link to="/">Return to Home</Link>
    </div>
  );
};
