import React from "react";
import { GeneralLink } from "../../components_index";

export const GroupPreview = (props) => {
  const { name, description, img } = props.group;
  return (
    <div className="GroupPreview-container">
      <img src={img} alt={name} />
      <div className="GroupPreview-content">
        <GeneralLink
          url={`/groups/${name}`}
          text={name}
          addClass="GroupsLink"
        />
        <span>{description}</span>
      </div>
    </div>
  );
};
