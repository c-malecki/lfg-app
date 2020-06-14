import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/context_index";
import { useParams } from "react-router-dom";

export const UserProfile = (props) => {
  const [userProfile, setUserProfile] = useState(null);
  const { allUsers } = useContext(AppContext);
  const { user } = useParams();
  useEffect(() => {
    const users = allUsers.map((user) => user.account).flat();
    const userForPage = users.find((account) => account.user_name === user);
    setUserProfile(userForPage);
  }, []);
  return (
    <div>
      <div>
        {userProfile !== null ? (
          <>
            <div>{userProfile.first_name}</div>
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};
