import React from "react";

export const GroupInfo = (props) => {
  const {
    group_name,
    date_created,
    group_genre,
    group_img,
    group_description,
  } = props.data;
  return (
    <div className="GroupInfo-container">
      <h2 className="component-heading">{group_name}</h2>
      <img src={group_img} alt={group_name} />
      <span>Date Created: {date_created}</span>
      <span>Genre: {group_genre}</span>
      <h3>Group Description</h3>
      <span>{group_description}</span>
    </div>
  );
};
