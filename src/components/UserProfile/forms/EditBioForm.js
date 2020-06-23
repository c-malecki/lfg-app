import React, { useState } from "react";
import { GeneralButton } from "../../components_index";

export const EditBioForm = (props) => {
  const [formState, setFormState] = useState({
    bio: props.bio,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="EditBioForm-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="EditBioForm-input-container">
          <textarea
            onChange={(e) => setFormState({ bio: e.target.value })}
            name="bio"
            className="EditBioForm-input"
            type="text"
            value={formState.bio}
          />
        </div>
        <div className="EditBioForm-submit-container">
          <GeneralButton
            type="submit"
            addClass="general-theme-button"
            text="save"
          />

          <GeneralButton
            text="cancel"
            addClass="close-delete-button"
            method={props.toggleEditBio}
          />
        </div>
      </form>
    </div>
  );
};
