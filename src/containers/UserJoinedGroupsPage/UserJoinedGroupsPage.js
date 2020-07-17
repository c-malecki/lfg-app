import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GroupPreview, GeneralLink } from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { useSelector } from "react-redux";

export const UserJoinedGroupsPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { username } = useParams();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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
        <h2
          className={`${
            isDarkTheme ? "page-heading-dark" : "page-heading-light"
          }`}
        >
          <GeneralLink
            url={`/users/${username}`}
            text={username}
            addClass="PageHeaderLink"
          />
        </h2>
        <div className="page-actions">
          <span
            className={`search-placeholder ${
              isDarkTheme ? "textinput-dark" : "textinput-light"
            }`}
          >
            search placeholder
          </span>
        </div>
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
