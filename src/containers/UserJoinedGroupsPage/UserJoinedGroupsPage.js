import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UsersState, GroupsState } from "../../contexts/context_index";
import { GroupPreview, GeneralLink } from "../../components/components_index";

export const UserJoinedGroupsPage = (props) => {
  const [groupsForPage, setGroupsForPage] = useState(null);
  const { allUsers } = useContext(UsersState);
  const { groups } = useContext(GroupsState);
  const { user } = useParams();
  useEffect(() => {
    if (allUsers) {
      const findUser = allUsers.find((u) => u.user_name === user);
      const userGroups = findUser.groups;
      const groupsFiltered = groups.filter((g) => {
        if (userGroups.includes(g.group_name)) {
          return g;
        } else {
          return null;
        }
      });
      setGroupsForPage(groupsFiltered);
    }
  }, [allUsers, groups, user]);
  return (
    <div className="UserJoinedGroupsPage-container">
      <div className="UserJoinedGroupsPage-content">
        <h2 className="page-heading">
          <GeneralLink
            url={`/users/${user}`}
            text={user}
            addClass="PageHeaderLink"
          />
          's Groups
        </h2>
        <span className="search-placeholder">search placeholder</span>
        {groupsForPage ? (
          <>
            {groupsForPage.map((group) => {
              return (
                <GroupPreview
                  group={{
                    name: group.group_name,
                    description: group.group_description,
                    img: group.group_img,
                  }}
                  key={group.group_id}
                />
              );
            })}
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};
