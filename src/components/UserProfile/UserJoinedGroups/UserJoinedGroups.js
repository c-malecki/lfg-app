import React from "react";
import { GeneralLink } from "../../components_index";

export const UserJoinedGroups = (props) => {
  const { userForPageGroups, userForPageUsername } = props;
  const { joined } = userForPageGroups;
  return (
    <div className="UserJoinedGroups-container">
      <div className="component-head">
        <h3>Groups</h3>
        <GeneralLink url={`${userForPageUsername}/groups`} text="See All" />
      </div>

      <ul className="UserJoinedGroups-list">
        {joined.map((g) => {
          return (
            <li key={g.group_id}>
              <GeneralLink
                url={`/g/${g.group_name}`}
                text={g.group_name}
                addClass="UserLink"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
