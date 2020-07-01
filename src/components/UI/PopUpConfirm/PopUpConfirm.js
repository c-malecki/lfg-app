import React from "react";

export const PopUpConfirm = (props) => {
  return (
    <div className="PopUpConfirm-container">
      <div className="PopUpConfirm-content">
        <span className="PopUpConfirm-message">{props.message}</span>
        <div className="PopUpConfirm-buttons">
          <button onClick={props.ok} className="ok-confirm-button">
            ok
          </button>
          <button onClick={props.cancel} className="close-delete-button">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
