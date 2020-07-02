import React, { useContext } from "react";
import { GroupsState } from "../../contexts/context_index";
import { GroupPreview } from "../../components/components_index";

export const GroupsListPage = (props) => {
  const { groups } = useContext(GroupsState);
  return (
    <div className="GroupsListPage-container">
      <div className="GroupsListPage-content">
        <h2 className="page-heading">Groups</h2>
        <span className="search-placeholder">search placeholder</span>
        {groups.map((group) => {
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
      </div>
    </div>
  );
};
