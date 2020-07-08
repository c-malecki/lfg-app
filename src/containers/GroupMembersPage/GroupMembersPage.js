import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GroupsState } from "../../contexts/context_index";
import { GeneralLink } from "../../components/components_index";

export const GroupMembersPage = (props) => {
  const [membersForPage, setMembersForPage] = useState(null);
  // const { allUsers } = useContext(UsersState);
  const { groups } = useContext(GroupsState);
  const { group } = useParams();
  useEffect(() => {
    const findGroup = groups.find((g) => g.group_name === group);
    const members = findGroup.group_members;
    setMembersForPage(members);
  }, [group, groups]);
  return (
    <div className="GroupMembersPage-container">
      <div className="GroupMembersPage-content">
        <h2 className="page-heading">
          <GeneralLink
            url={`/g/${group}`}
            text={`${group}`}
            addClass="PageHeaderLink"
          />{" "}
          Members
        </h2>
        {membersForPage ? (
          <>
            <ul className="GroupMembers-list">
              {membersForPage.map((member) => {
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
          </>
        ) : null}
      </div>
    </div>
  );
};
