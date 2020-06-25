import React, { useContext, useState, useEffect } from "react";
import {
  UserProfile,
  MessageUserLink,
} from "../../components/components_index";
import { UsersState } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfilePage = (props) => {
  const [userProfile, setUserProfile] = useState(null);
  const { allUsers } = useContext(UsersState) || null;
  const { currentUser } = useContext(UsersState);
  const { user } = useParams();
  useEffect(() => {
    if (allUsers !== null && allUsers !== undefined) {
      const users = allUsers.map((user) => user.profile).flat();
      const userForPage = users.find((profile) => profile.user_name === user);
      setUserProfile(userForPage);
    } else {
      setUserProfile(null);
    }
  }, [allUsers, user]);
  return (
    <div className="UserProfile-container">
      {userProfile !== null ? (
        <div className="UserProfile-content">
          <h2>{userProfile.user_name}</h2>
          {currentUser &&
          currentUser.account.user_name !== userProfile.user_name ? (
            <MessageUserLink username={userProfile.user_name} />
          ) : null}
          <UserProfile userProfile={userProfile} />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
