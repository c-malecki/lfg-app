import React from "react";
import { GeneralLink, MessageViewLink } from "../../components_index";

export const MessagePreview = (props) => {
  const { from, to, date, subject, id } = props;
  return (
    <div className="MessagePreview-container">
      <MessageViewLink id={id} subject={subject} addClass="" />
      <div>
        <span className="head-text-content">From</span>
        <GeneralLink url={`/users/${from}`} text={from} addClass="UserLink" />
        <span className="head-text-content">to</span>
        <GeneralLink url={`/users/${to}`} text={to} addClass="UserLink" />
        <span className="head-text-content">at {date}</span>
      </div>
    </div>
  );
};
