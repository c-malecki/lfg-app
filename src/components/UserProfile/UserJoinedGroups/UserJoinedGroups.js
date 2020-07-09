import React from "react";
import { GeneralLink } from "../../components_index";

export const UserJoinedGroups = (props) => {
  const { groups, username } = props.userInfo;
  const { joined } = groups;
  return (
    <div className="UserJoinedGroups-container">
      <h3>Groups</h3>
      <GeneralLink
        url={`${username}/groups`}
        text="see all"
        addClass="PageContentLink"
      />
      <div className="UserJoinedGroups-content">
        <ul className="UserJoinedGroups-list">
          {joined.map((g) => {
            return (
              <li key={g.group_id}>
                <GeneralLink
                  url={`/g/${g.group_name}`}
                  text={g.group_name}
                  addClass="GroupsLink"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
