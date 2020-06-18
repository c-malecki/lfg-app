import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = (props) => {
  return (
    <Link
      className={`UI-ButtonLink ${props.addClass}`}
      onClick={props.method ? () => props.method() : null}
      to={props.url}
    >
      {props.text}
    </Link>
  );
};
