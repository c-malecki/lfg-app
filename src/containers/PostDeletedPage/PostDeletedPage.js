import React from "react";
import { GeneralLink } from "../../components/components_index";
import { useSelector } from "react-redux";

export const PostDeletedPage = (props) => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`PostDeleted-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <span>Post successfully deleted.</span>
      {props.location.state.group ? (
        <GeneralLink
          url={`/g/${props.location.state.group}/posts`}
          text={`Return to g/${props.location.state.group}`}
          addClass="large-link"
        />
      ) : (
        <GeneralLink url={`/`} text={`Return to Home`} addClass="large-link" />
      )}
    </div>
  );
};
