import React, { useState, useContext } from "react";
import { EditBioForm } from "../forms/EditBioForm";
import { GeneralButton } from "../../components_index";
import { UsersState } from "../../../contexts/context_index";

export const UserBio = (props) => {
  const [editBio, setEditBio] = useState({
    editMode: false,
    showButton: true,
  });
  const { currentUser } = useContext(UsersState);
  const { profile, username } = props.userInfo;
  const { bio } = profile;
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
          user_name={username}
        />
      ) : (
        <div className="UserProfile-bio">
          <span>{bio}</span>
        </div>
      )}

      {currentUser &&
      currentUser.user_name === username &&
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
