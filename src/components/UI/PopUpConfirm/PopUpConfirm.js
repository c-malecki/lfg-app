import React from "react";
import { GeneralButton } from "../../components_index";
import { useSelector } from "react-redux";

export const PopUpConfirm = (props) => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`PopUpConfirm-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <div className="PopUpConfirm-content">
        <span className="PopUpConfirm-message">{props.message}</span>
        <div className="PopUpConfirm-buttons">
          <GeneralButton
            text="ok"
            method={props.ok}
            addClass="general-theme-button"
          />
          <GeneralButton
            text="cancel"
            method={props.cancel}
            addClass="close-delete-button"
          />
        </div>
      </div>
    </div>
  );
};
