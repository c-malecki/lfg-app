import React, { useContext, useState, useEffect } from "react";
import { UserProfile } from "../../components/components_index";
import { UsersContext } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfilePage = (props) => {
  const [userProfile, setUserProfile] = useState(null);
  const { allUsers } = useContext(UsersContext) || null;
  const { user } = useParams();
  useEffect(() => {
    if (allUsers !== null && allUsers !== undefined) {
      const users = allUsers.map((user) => user.account).flat();
      const userForPage = users.find((account) => account.user_name === user);
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
          <UserProfile userProfile={userProfile} />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
