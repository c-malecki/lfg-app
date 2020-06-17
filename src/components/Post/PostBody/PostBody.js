import React from "react";
import { UserLink } from "../../components_index";

export const PostBody = (props) => {
  const { content } = props;
  return (
    <div className="PostBody-container">
      <h3>{content.title}</h3>
      <span className="head-text-content">By</span>
      <UserLink username={content.author} />
      <span className="head-text-content">at {content.date}</span>
      <p>{content.content}</p>
    </div>
  );
};
