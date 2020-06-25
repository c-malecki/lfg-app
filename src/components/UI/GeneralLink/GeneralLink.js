import React from "react";
import { Link } from "react-router-dom";

export const GeneralLink = (props) => {
  return (
    <Link to={props.url} className={`GeneralLink ${props.addClass}`}>
      {props.text}
    </Link>
  );
};
