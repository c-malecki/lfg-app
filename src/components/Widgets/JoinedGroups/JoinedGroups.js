import React, { useContext, useEffect, useState } from "react";
import { GroupsState, UsersState } from "../../../contexts/context_index";
import { GeneralLink } from "../../components_index";

export const JoinedGroups = (props) => {
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
    <div className="JoinedGroups-container">
      <h3>Your Groups</h3>
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
        <span className="not-logged-in">
          Login to view your groups or register to join groups.
        </span>
      )}
    </div>
  );
};
