import React from "react";
import { GeneralLink } from "../../components/components_index";

export const PostDeletedPage = () => {
  return (
    <div className="PostDeleted-content">
      <span>Post successfully deleted.</span>
      <GeneralLink url="/" text="Return to Home" />
    </div>
  );
};
