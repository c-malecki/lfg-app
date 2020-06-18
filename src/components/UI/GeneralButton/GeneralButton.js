import React from "react";

export const GeneralButton = (props) => {
  return (
    <button
      className={`UI-GeneralButton ${props.addClass}`}
      onClick={props.method ? () => props.method() : null}
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
    >
      {props.text}
    </button>
  );
};
