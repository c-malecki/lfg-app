import React from "react";
import { GeneralLink } from "../../components_index";

export const GroupMembers = (props) => {
  const members = props.members;
  return (
    <div className="GroupMembers-container">
      <h2>Members</h2>
      <ul className="GroupMembers-list">
        {members.map((member) => {
          return (
            <li key={member.member_id}>
              <div className="GroupMember-item">
                <GeneralLink
                  url={`/users/${member.user_name}`}
                  text={member.user_name}
                  addClass="UserLink"
                />
                <span>{member.role}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
