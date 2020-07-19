import React, { useState, useEffect } from "react";
import { GroupPreview } from "../../components/components_index";
import axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { useSelector } from "react-redux";

export const GroupsListPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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
          error: error.response.data,
          pageData: null,
        });
      });
  }, []);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <h2
          className={`${
            isDarkTheme ? "page-heading-dark" : "page-heading-light"
          }`}
        >
          Groups
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

        {pageData.map((g) => {
          return (
            <GroupPreview
              name={g.group_name}
              heading={g.group_profile.group_heading}
              img={g.group_profile.group_img}
              key={g.group_id}
            />
          );
        })}
      </>
    );
  };
  return (
    <div
      className={`GroupsListPage-content ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
