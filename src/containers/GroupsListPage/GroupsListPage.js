import React, { useState, useEffect } from "react";
import { GroupPreview } from "../../components/components_index";
import axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const GroupsListPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/groups`)
      .then((res) => {
        setPageStatus({
          isLoading: false,
          error: null,
          pageData: res.data,
        });
      })
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.message,
          pageData: null,
        });
      });
  }, []);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <h2 className="page-heading">Groups</h2>
        <span className="search-placeholder">search placeholder</span>
        {pageData.map((g) => {
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
  };
  return (
    <div className="GroupsListPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
