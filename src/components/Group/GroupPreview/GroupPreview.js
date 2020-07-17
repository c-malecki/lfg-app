import React from "react";
import { GeneralLink } from "../../components_index";
import { utilGroupDescriptionPreview } from "../../../assets/util/textHelpers";
import { useSelector } from "react-redux";

export const GroupPreview = (props) => {
  const { name, description, img } = props.group;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`GroupPreview-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <img src={img} alt={name} />
      <div className="GroupPreview-content">
        <GeneralLink url={`/g/${name}`} text={name} addClass="large-link" />
        <p>
          {description.length > 70
            ? `${utilGroupDescriptionPreview(description)}...`
            : description}
        </p>
      </div>
    </div>
  );
};
