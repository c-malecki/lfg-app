import React from "react";

export const PostBody = (props) => {
  const { content } = props;
  return (
    <div>
      <h3>{content.title}</h3>
      <p>{content.content}</p>
    </div>
  );
};
