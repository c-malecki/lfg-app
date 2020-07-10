import React from "react";
import { GeneralLink } from "../../components_index";

export const GroupMembers = (props) => {
  const { members, group } = props;
  return (
    <div className="GroupMembers-container">
      <h3 className="component-heading">Members</h3>
      <GeneralLink
        url={`/g/${group}/members`}
        text="see all"
        addClass="PageContentLink"
      />
      <ul className="GroupMembers-list">
        {members.map((m) => {
          return (
            <li key={m.member_id}>
              <div className="GroupMember-item">
                <GeneralLink
                  url={`/users/${m.username}`}
                  text={m.username}
                  addClass="UserLink"
                />
                <span>{m.role}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
