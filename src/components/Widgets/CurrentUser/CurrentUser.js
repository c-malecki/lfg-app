import React from "react";
import { GeneralLink, WidgetLoader } from "../../components_index";
import { useSelector } from "react-redux";

export const CurrentUser = (props) => {
  const { currentUser, isLoggedIn, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const currentUserContent = () => {
    if (isLoading) {
      return <WidgetLoader />;
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
  return (
    <>
      {currentUser && isLoggedIn ? (
        <div className="CurrentUser-container">{currentUserContent()}</div>
      ) : null}
    </>
  );
};
