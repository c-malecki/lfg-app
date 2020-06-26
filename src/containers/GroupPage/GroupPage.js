import React, { useContext, useState, useEffect } from "react";
import { GroupsState } from "../../contexts/context_index";
import { useParams } from "react-router-dom";
import {
  GroupInfo,
  GroupMembers,
  GroupPosts,
} from "../../components/components_index";

export const GroupPage = (props) => {
  const [groupForPage, setGroupForPage] = useState(null);
  const { groups } = useContext(GroupsState);
  const { group } = useParams();
  useEffect(() => {
    const findGroup = groups.find((g) => g.group_name === group);
    setGroupForPage(findGroup);
  }, [group, groups]);
  return (
    <div className="GroupPage-container">
      <div className="GroupPage-content">
        {groupForPage ? (
          <>
            <div className="GroupPage-content-col1">
              <GroupInfo data={groupForPage} />
            </div>
            <div className="GroupPage-content-col2">
              <GroupMembers members={groupForPage.group_members} />
            </div>
          </>
        ) : (
          <div>...loading</div>
        )}
      </div>
      <div className="GroupPage-content">
        {groupForPage ? (
          <div className="GroupPage-content-col1">
            <GroupPosts groupName={groupForPage.group_name} />
          </div>
        ) : (
          <div>...loading</div>
        )}
      </div>
    </div>
  );
};
