import React from "react";
import { GeneralLink, WidgetLoader, LogInForm } from "../../components_index";
import { useSelector } from "react-redux";

export const YourGroups = (props) => {
  const { currentUser, isLoggedIn, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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
                addClass="large-link"
                key={g.group_id}
              />
            );
          })}
        </>
      );
    }
  };
  return (
    <div
      className={`YourGroups-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      {currentUser && isLoggedIn ? (
        <div className="YourGroups-content">
          <GeneralLink
            text="Your Groups"
            url={`/users/${currentUser.username}/groups`}
            addClass="widget-header"
          />
          {yourGroupsContent()}
        </div>
      ) : (
        <>
          <h3>Login</h3>
          <LogInForm />
        </>
      )}
    </div>
  );
};
