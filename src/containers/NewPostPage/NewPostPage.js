import React from "react";
import { NewPostForm } from "../../components/components_index";

export const NewPostPage = (props) => {
  return (
    <div className="NewPostPage-container">
      <div className="NewPost-container">
        <NewPostForm />
      </div>
    </div>
  );
};
