import React from "react";

export const GroupInfo = (props) => {
  const { group_name, group_profile } = props.group;
  const { group_img, date_created, description } = group_profile;
  return (
    <div className="GroupInfo-container">
      <h2 className="component-heading">{group_name}</h2>
      <img src={group_img} alt={group_name} />
      <span>Date Created: {date_created}</span>
      <h3>Group Description</h3>
      <span>{description}</span>
    </div>
  );
};
