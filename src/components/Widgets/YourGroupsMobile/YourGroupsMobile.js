import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const YourGroupsMobile = (props) => {
  const { currentUser, isLoggedIn, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const yourGroupsContent = () => {
    if (isLoading) {
      return <div>loading...</div>;
    } else if (!isLoading && !isLoggedIn && !currentUser) {
      return (
        <div className="not-logged-in">
          <GeneralLink
            text="Login"
            url="/login"
            addClass="PostPreviewHeadLink"
          />
          to view your groups or register to join groups.
        </div>
      );
    } else if (!isLoading && isLoggedIn && currentUser) {
      const joinedGroups = currentUser.groups.joined;
      return (
        <>
          {joinedGroups.map((g) => {
            return (
              <GeneralLink
                url={`/g/${g.group_name}`}
                text={g.group_name}
                addClass="GroupsLink"
                key={g.group_id}
              />
            );
          })}
        </>
      );
    }
  };
  return (
    <div className="YourGroupsMobile-container">
      <div className="YourGroupsMobile-content">
        <h3 className="component-heading">Your Groups</h3>
        {yourGroupsContent()}
      </div>
    </div>
  );
};
