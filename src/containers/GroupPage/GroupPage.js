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
      {groupForPage ? (
        <>
          <GroupInfo data={groupForPage} />
          <GroupMembers members={groupForPage.group_members} />
          <GroupPosts groupName={groupForPage.group_name} />
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};
