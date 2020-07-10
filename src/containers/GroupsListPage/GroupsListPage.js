import React, { useState, useEffect } from "react";
import { GroupPreview } from "../../components/components_index";
import axios from "axios";

export const GroupsListPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [groupsForPage, setGroupsForPage] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/groups")
      .then((res) => {
        setGroupsForPage(res.data);
        setPageStatus({
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.message,
        });
      });
  }, []);
  const groupsListContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          {groupsForPage.map((g) => {
            return (
              <GroupPreview
                group={{
                  name: g.group_name,
                  description: g.group_profile.description,
                  img: g.group_profile.group_img,
                }}
                key={g.group_id}
              />
            );
          })}
        </>
      );
    }
  };
  return (
    <div className="GroupsListPage-container">
      <div className="GroupsListPage-content">
        <h2 className="page-heading">Groups</h2>
        <span className="search-placeholder">search placeholder</span>
        {groupsListContent()}
      </div>
    </div>
  );
};
