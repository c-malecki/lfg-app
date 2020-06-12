import React from "react";
import { useHistory } from "react-router-dom";

export const Post = (props) => {
  const history = useHistory();
  const { state } = history.location;
  return (
    <div>
      <div>
        <h2>{state.title}</h2>
        <span>{state.user}</span>
        <span>{state.date}</span>
      </div>
      <div>
        <p>{state.content}</p>
      </div>
    </div>
  );
};
