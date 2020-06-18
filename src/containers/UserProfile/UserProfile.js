import React, { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfile = (props) => {
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
          <span>
            Name: {userProfile.first_name} {userProfile.last_name}
          </span>
          <span>Email: {userProfile.email}</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
