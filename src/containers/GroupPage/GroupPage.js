import React, { useContext, useState, useEffect } from "react";
import { GroupsState } from "../../contexts/context_index";
import { useParams } from "react-router-dom";
import { GroupInfo } from "../../components/components_index";

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
          <div className="Group-row1-col1">
            <GroupInfo data={groupForPage} />
          </div>
          <div className="Group-row1-col2">members list</div>
        </>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};
