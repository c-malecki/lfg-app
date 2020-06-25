import React from "react";

export const GroupInfo = (props) => {
  const { group_name, date_created, group_genre, group_img } = props.data;
  return (
    <div className="GroupInfo-container">
      <h2>{group_name}</h2>
      <img src={group_img} alt={group_name} />
      <span>Date Created: {date_created}</span>
      <span>Genre: {group_genre}</span>
    </div>
  );
};
