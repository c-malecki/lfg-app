import React, { useContext, useState, useEffect } from "react";
import { UserProfile, GeneralLink } from "../../components/components_index";
import { UsersState } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfilePage = (props) => {
  const [userProfile, setUserProfile] = useState(null);
  const { allUsers } = useContext(UsersState) || null;
  const { currentUser } = useContext(UsersState);
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
    <div className="UserProfile-container">
      {userProfile !== null ? (
        <div className="UserProfile-content">
          <h2>{userProfile.user_name}</h2>
          {currentUser &&
          currentUser.account.user_name !== userProfile.user_name ? (
            <GeneralLink
              url={`/messages/new/to-${userProfile.user_name}`}
              text="message"
              addClass="MessageUserLink"
            />
          ) : null}
          <UserProfile
            userProfile={userProfile.profile}
            groups={userProfile.groups}
          />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
