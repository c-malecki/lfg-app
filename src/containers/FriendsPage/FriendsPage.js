import React, { useContext, useEffect, useState } from "react";
import { UsersState } from "../../contexts/context_index";
import { FriendsUserPreview } from "../../components/components_index";

export const FriendsPage = (props) => {
  const [userFriends, setUserFriends] = useState({
    mutual: [],
    pending: [],
  });
  const { allUsers, currentUser } = useContext(UsersState);
  useEffect(() => {
    if (currentUser) {
      const findMutual = currentUser.friends.filter((f) => f.pending === false);
      const findPending = currentUser.friends.filter((f) => f.pending === true);
      setUserFriends({
        mutual: findMutual,
        pending: findPending,
      });
    }
  }, [allUsers, currentUser]);
  return (
    <div className="FriendsPage-container">
      <div className="FriendsPage-content">
        <h3 className="page-heading">Pending Requests</h3>
        {userFriends && currentUser ? (
          <>
            {userFriends.pending.length > 0 ? (
              <>
                {userFriends.pending.map((f) => (
                  <FriendsUserPreview
                    friend={f}
                    key={f.user_id}
                    currentUser={currentUser.user_name}
                  />
                ))}
              </>
            ) : (
              <span className="no-content-message">No requests pending.</span>
            )}
          </>
        ) : (
          <div>...loading</div>
        )}
        <h3 className="page-heading">Friends</h3>
        {userFriends ? (
          <>
            {userFriends.mutual.map((f) => (
              <FriendsUserPreview
                friend={f}
                key={f.user_id}
                currentUser={currentUser.user_name}
              />
            ))}
          </>
        ) : (
          <div>...loading</div>
        )}
      </div>
    </div>
  );
};
