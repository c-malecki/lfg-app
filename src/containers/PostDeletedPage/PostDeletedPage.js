import React from "react";
import { GeneralLink } from "../../components/components_index";

export const PostDeletedPage = (props) => {
  const { group } = props.location.state;
  return (
    <div className="PostDeleted-content">
      <span>Post successfully deleted.</span>
      <GeneralLink url={`/g/${group}/posts`} text={`Return to g/${group}`} />
    </div>
  );
};
