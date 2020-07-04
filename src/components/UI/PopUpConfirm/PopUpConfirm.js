import React from "react";
import { GeneralButton } from "../../components_index";

export const PopUpConfirm = (props) => {
  return (
    <div className="PopUpConfirm-container">
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
