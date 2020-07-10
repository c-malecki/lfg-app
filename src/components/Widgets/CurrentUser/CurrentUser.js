import React from "react";
import { GeneralLink } from "../../components_index";

// redux
import { useSelector } from "react-redux";

export const CurrentUser = (props) => {
  const { currentUser, isLoggedIn, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const currentUserContent = () => {
    if (isLoading) {
      return <div>loading...</div>;
    } else if (!isLoading && !isLoggedIn && !currentUser) {
      return <span className="not-logged-in">Currently not logged in.</span>;
    } else if (!isLoading && isLoggedIn && currentUser) {
      const { username, profile, friends, groups } = currentUser;
      return (
        <>
          <h3 className="component-heading">
            <GeneralLink
              url={`/users/${username}`}
              text={`${username}`}
              addClass="PageContentLink"
            />
          </h3>
          <img src={profile.user_img} alt={username} />
          <span>Friends: {friends.accepted.length}</span>
          <span>Groups: {groups.joined.length}</span>
        </>
      );
    }
  };
  return <div className="CurrentUser-container">{currentUserContent()}</div>;
};
