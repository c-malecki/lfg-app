import React from "react";
import { GeneralLink, WidgetLoader, LogInForm } from "../../components_index";
import { useSelector } from "react-redux";

export const YourGroups = (props) => {
  const { currentUser, isLoggedIn, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const yourGroupsContent = () => {
    if (isLoading) {
      return <WidgetLoader />;
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
    <div className="YourGroups-container">
      {currentUser && isLoggedIn ? (
        <div className="YourGroups-content">
          <h3 className="component-heading">Your Groups</h3>
          {yourGroupsContent()}
        </div>
      ) : (
        <>
          <h3 className="component-heading">Login</h3>
          <LogInForm />
        </>
      )}
    </div>
  );
};
