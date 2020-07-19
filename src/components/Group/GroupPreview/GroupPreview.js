import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const GroupPreview = (props) => {
  const { name, img, heading } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`GroupPreview-container ${
        isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
      }`}
    >
      <img src={img} alt={name} />
      <div className="GroupPreview-content">
        <GeneralLink url={`/g/${name}`} text={name} addClass="large-link" />
        <p>{heading}</p>
      </div>
    </div>
  );
};
