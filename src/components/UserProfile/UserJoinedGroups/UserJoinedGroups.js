import React from "react";
import { GeneralLink } from "../../components_index";

export const UserJoinedGroups = (props) => {
  const { groups } = props.userProfile;
  return (
    <div className="UserJoinedGroups-container">
      <h3>Groups</h3>
      <ul className="UserJoinedGroups-list">
        {groups.map((group) => {
          return (
            <li key={group}>
              <GeneralLink
                url={`/g/${group}`}
                text={group}
                addClass="GroupsLink"
                key={group}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
