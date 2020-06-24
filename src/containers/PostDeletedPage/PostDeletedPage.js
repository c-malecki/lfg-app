import React from "react";
import { Link } from "react-router-dom";

export const PostDeletedPage = () => {
  return (
    <div className="PostDeletedPage-container">
      <div className="PostDeletedPage-content">
        <span>Post successfully deleted.</span>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
};
