import React from "react";
import { useSelector } from "react-redux";

export const GroupInfo = (props) => {
  const { group_name, group_profile } = props.group;
  const { group_img, date_created, description, group_heading } = group_profile;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`GroupInfo-container ${
        isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
      }`}
    >
      <h2>
        {group_name} - {group_heading}
      </h2>
      <img src={group_img} alt={group_name} />
      <span>Date Created: {date_created}</span>
      <h3>Group Description</h3>
      <p>{description}</p>
    </div>
  );
};
