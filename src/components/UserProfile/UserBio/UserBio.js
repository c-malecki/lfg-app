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
  const { bio, userForPageUsername } = props;
  const toggleEditBio = () => {
    setEditBio({
      editMode: !editBio.editMode,
      showButton: !editBio.showButton,
    });
  };
  return (
    <div className="UserProfile-bio-container">
      <div className="component-head">
        <h3>Bio</h3>
      </div>

      {editBio.editMode ? (
        <EditBioForm
          bio={bio}
          toggleEditBio={toggleEditBio}
          username={userForPageUsername}
        />
      ) : (
        <div className="UserProfile-bio">
          <span>{bio}</span>
        </div>
      )}

      {currentUser &&
      currentUser.username === userForPageUsername &&
      editBio.showButton ? (
        <span>
          <GeneralButton
            method={toggleEditBio}
            text="edit"
            addClass="general-theme-button"
          />
        </span>
      ) : null}
    </div>
  );
};
