import React, { useContext, useEffect, useState } from "react";
import { GroupsState, UsersState } from "../../../contexts/context_index";
import { GeneralLink } from "../../components_index";

export const JoinedGroups = (props) => {
  const [userGroups, setUserGroups] = useState(null);
  const { groups } = useContext(GroupsState);
  const { currentUser } = useContext(UsersState);
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
      <h2>Your Groups</h2>
      {userGroups ? (
        userGroups.map((group) => {
          return (
            <GeneralLink
              url={`/groups/${group.group_name}`}
              text={group.group_name}
              addClass="GroupsLink"
              key={group.group_id}
            />
          );
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
