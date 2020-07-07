import React from "react";
import { GeneralLink } from "../../components_index";

export const UserJoinedGroups = (props) => {
  const { groups } = props.userProfile;
  const user = props.username;
  return (
    <div className="UserJoinedGroups-container">
      <h3>Groups</h3>
      <GeneralLink
        url={`${user}/groups`}
        text="see all"
        addClass="PageContentLink"
      />
      <div className="UserJoinedGroups-content">
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
    </div>
  );
};
