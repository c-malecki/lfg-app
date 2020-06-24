import React from "react";
import { UserLink } from "../../components_index";

export const MessageBody = (props) => {
  return (
    <div className="MessageBody-container">
      <span className="head-text-content">{props.from ? "From" : "To"}</span>
      <UserLink username={props.from ? props.from : props.to} />
      <span className="head-text-content">at {props.date}</span>
      <p>{props.content}</p>
    </div>
  );
};
