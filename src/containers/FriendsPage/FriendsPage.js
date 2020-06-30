import React, { useContext, useEffect, useState } from "react";
import { UsersState } from "../../contexts/context_index";
import { UserPreview } from "../../components/components_index";

export const FriendsPage = (props) => {
  const [userFriends, setUserFriends] = useState(null);
  const { allUsers, currentUser } = useContext(UsersState);
  useEffect(() => {
    if (currentUser) {
      const friends = allUsers.filter((u) =>
        u.user_name.includes(currentUser.friends)
      );
      setUserFriends(friends);
    }
  }, [allUsers, currentUser]);
  return (
    <div className="FriendsPage-container">
      <h3 className="page-heading">Friends</h3>
      {userFriends ? (
        <>
          {userFriends.map((f) => (
            <UserPreview friend={f} key={f.user_id} />
          ))}
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};
