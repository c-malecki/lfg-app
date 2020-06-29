import React, { useContext, useState, useEffect } from "react";
import {
  UserProfileInfo,
  UserJoinedGroups,
  UserBio,
} from "../../components/components_index";
import { UsersState } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfilePage = (props) => {
  const [userProfile, setUserProfile] = useState(null);
  const { allUsers } = useContext(UsersState);
  const { user } = useParams();
  useEffect(() => {
    if (allUsers !== null && allUsers !== undefined) {
      const userForPage = allUsers.find((u) => u.user_name === user);
      setUserProfile(userForPage);
    } else {
      setUserProfile(null);
    }
  }, [allUsers, user]);
  return (
    <div className="UserProfilePage-container">
      {userProfile !== null ? (
        <>
          <UserProfileInfo userProfile={userProfile} />
          <UserBio userProfile={userProfile} />
          <UserJoinedGroups userProfile={userProfile} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
