import React, { useState } from "react";
import { EditBioForm } from "../forms/EditBioForm";
import { GeneralButton } from "../../components_index";
import { useSelector } from "react-redux";

export const UserBio = (props) => {
  const [editBio, setEditBio] = useState({
    editMode: false,
    showButton: true,
  });
  const { currentUser } = useSelector((state) => state.userReducer);
  const { bio, username } = props;
  const toggleEditBio = () => {
    setEditBio({
      editMode: !editBio.editMode,
      showButton: !editBio.showButton,
    });
  };
  return (
    <div className="UserProfile-bio-container">
      <h3>Bio</h3>

      {editBio.editMode ? (
        <EditBioForm
          bio={bio}
          toggleEditBio={toggleEditBio}
          username={username}
        />
      ) : (
        <div className="UserProfile-bio">
          <span>{bio}</span>
        </div>
      )}

      {currentUser &&
      currentUser.username === username &&
      editBio.showButton ? (
        <div className="bio-toggle-container">
          <GeneralButton
            method={toggleEditBio}
            text="edit"
            addClass="general-theme-button"
          />
        </div>
      ) : null}
    </div>
  );
};
