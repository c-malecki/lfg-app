import React from "react";

export const FriendsPage = (props) => {
  return (
    <div className="FriendsPage-container">
      <div className="FriendsPage-content">
        {/* {isLoggedIn && currentUser ? (
          <>
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
                  <span className="no-content-message">
                    No requests pending.
                  </span>
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
          </>
        ) : (
          <div>
            Must be logged in. (create redirect to log in or modal log in)
          </div>
        )} */}
        Reworking for api usage.
      </div>
    </div>
  );
};
