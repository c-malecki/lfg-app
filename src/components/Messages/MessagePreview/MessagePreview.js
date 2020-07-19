import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const MessagePreview = (props) => {
  const { from, to, date, subject, id } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`MessagePreview-container ${
        isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
      }`}
    >
      <GeneralLink
        url={`/messages/message/${id}`}
        text={subject}
        addClass="in-text-link"
      />
      <div>
        <span className="head-text-content">From</span>
        <GeneralLink
          url={`/users/${from}`}
          text={from}
          addClass="in-text-link"
        />
        <span className="head-text-content">to</span>
        <GeneralLink url={`/users/${to}`} text={to} addClass="in-text-link" />
        <span className="head-text-content">at {date}</span>
      </div>
    </div>
  );
};
