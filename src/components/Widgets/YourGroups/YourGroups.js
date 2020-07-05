import React, { useContext, useEffect, useState } from "react";
import { GroupsState, UsersState } from "../../../contexts/context_index";
import { GeneralLink } from "../../components_index";

export const YourGroups = (props) => {
  const [userGroups, setUserGroups] = useState(null);
  const { groups } = useContext(GroupsState);
  const { currentUser, isLoggedIn } = useContext(UsersState);
  useEffect(() => {
    if (currentUser) {
      const joinedGroups = groups.filter((group) =>
        group.members_list.includes(currentUser.account.user_name)
      );
      setUserGroups(joinedGroups);
    }
  }, [currentUser, groups]);
  return (
    <div className="YourGroups-container">
      <h3 className="component-heading">Your Groups</h3>
      {userGroups && isLoggedIn ? (
        userGroups.map((group) => {
          return (
            <GeneralLink
              url={`/g/${group.group_name}`}
              text={group.group_name}
              addClass="GroupsLink"
              key={group.group_id}
            />
          );
        })
      ) : (
        <div className="not-logged-in">
          <GeneralLink
            text="Login"
            url="/login"
            addClass="PostPreviewHeadLink"
          />
          to view your groups or register to join groups.
        </div>
      )}
    </div>
  );
};
