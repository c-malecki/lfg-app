import React from "react";
import { GeneralLink } from "../../components_index";
import { utilGroupDescriptionPreview } from "../../../assets/util/textHelpers";

export const GroupPreview = (props) => {
  const { name, description, img } = props.group;
  return (
    <div className="GroupPreview-container">
      <img src={img} alt={name} />
      <div className="GroupPreview-content">
        <GeneralLink url={`/g/${name}`} text={name} addClass="GroupsLink" />
        <span>
          {description.length > 70
            ? `${utilGroupDescriptionPreview(description)}...`
            : description}
        </span>
      </div>
    </div>
  );
};
