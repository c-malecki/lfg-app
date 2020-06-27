import React, { useState, useContext } from "react";
import { EditBioForm } from "./forms/EditBioForm";
import { GeneralButton, GeneralLink } from "../components_index";
import { UsersState } from "../../contexts/context_index";

export const UserProfile = (props) => {
  const [editBio, setEditBio] = useState({
    editMode: false,
    showButton: true,
  });
  const { currentUser } = useContext(UsersState);
  // const user = currentUser.account.user_name;
  const {
    user_name,
    profile_pic,
    first_name,
    last_name,
    date_joined,
    bio,
  } = props.userProfile;
  const { groups } = props;
  const toggleEditBio = () => {
    setEditBio({
      editMode: !editBio.editMode,
      showButton: !editBio.showButton,
    });
  };
  return (
    <>
      <div className="UserProfile-account-info">
        <img
          src={profile_pic}
          alt={`${user_name}'s Avatar`}
          className="UserProfile-avatar"
        />
        <span>
          Name: {first_name} {last_name}
        </span>
        <span>Member since: {date_joined}</span>
      </div>
      <div className="UserProfile-bio-container">
        <h3>Bio:</h3>

        {editBio.editMode ? (
          <EditBioForm
            bio={bio}
            toggleEditBio={toggleEditBio}
            user_name={user_name}
          />
        ) : (
          <div className="UserProfile-bio">
            <span>{bio}</span>
          </div>
        )}

        {currentUser &&
        currentUser.account.user_name === user_name &&
        editBio.showButton ? (
          <div>
            <GeneralButton
              method={toggleEditBio}
              text="edit"
              addClass="general-theme-button"
            />
          </div>
        ) : null}

        <div className="UserProfile-groups-container">
          <h3>Groups:</h3>
          {groups.map((group) => {
            return (
              <GeneralLink
                url={`/g/${group}`}
                text={group}
                addClass="PostHeadLink"
                key={group}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
