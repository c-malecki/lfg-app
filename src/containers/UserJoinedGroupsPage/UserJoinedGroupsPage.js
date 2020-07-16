import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GroupPreview, GeneralLink } from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const UserJoinedGroupsPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { username } = useParams();
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/groups`)
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
  }, [username]);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <h2 className="page-heading">
          <GeneralLink
            url={`/users/${username}`}
            text={username}
            addClass="PageHeaderLink"
          />
          's Groups
        </h2>
        <span className="search-placeholder">search placeholder</span>
        {pageData.map((group) => {
          return (
            <GroupPreview
              group={{
                name: group.group_name,
                description: group.group_profile.description,
                img: group.group_profile.group_img,
              }}
              key={group.group_id}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="UserJoinedGroupsPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
