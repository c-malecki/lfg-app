import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GroupPreview, GeneralLink } from "../../components/components_index";
import axios from "axios";

export const UserJoinedGroupsPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [groupsForPage, setGroupsForPage] = useState(null);
  const { user } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user}/groups`)
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
  }, [user]);
  const userJoinedGroupsContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          {groupsForPage.map((group) => {
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
    }
  };
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
        {userJoinedGroupsContent()}
      </div>
    </div>
  );
};
