import React, { useState, useEffect } from "react";
import { PostPreview, GeneralButton } from "../../components/components_index";
import { useSelector } from "react-redux";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { sortByDate } from "../../assets/util/sortByDate";

export const RecentPostsPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  // Posts state
  const [viewAll, setViewAll] = useState(true);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        const sorted = sortByDate(res.data);
        setPageStatus({
          isLoading: false,
          error: null,
          pageData: sorted,
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

  // Changes posts to display all posts
  const handleToggleAll = () => {
    setViewAll(true);
  };
  // Changes posts to display only joined groups posts
  const handleToggleGroups = () => {
    setViewAll(false);
  };
  const content = () => {
    const { pageData } = pageStatus;
    // if a user is logged in, show filter options between all posts or posts from joined groups
    if (currentUser && pageData) {
      const groupPosts = pageData.filter(
        (p) => currentUser.groups.group_name_list.indexOf(p.posted_in) > -1
      );
      return (
        <>
          <h2
            className={`${
              isDarkTheme ? "page-heading-dark" : "page-heading-light"
            }`}
          >
            Recent Posts
          </h2>
          <div className="page-actions">
            <GeneralButton
              text="all"
              addClass={`${isDarkTheme ? "ui-button-dark" : "ui-button-light"}`}
              method={() => handleToggleAll()}
            />
            <GeneralButton
              text="groups"
              addClass={`${isDarkTheme ? "ui-button-dark" : "ui-button-light"}`}
              method={() => handleToggleGroups()}
            />
            <span
              className={`search-placeholder ${
                isDarkTheme ? "textinput-dark" : "textinput-light"
              }`}
            >
              search placeholder
            </span>
          </div>
          {viewAll ? (
            <>
              {pageData.map((p) => (
                <PostPreview post={p} key={p.post_id} />
              ))}
            </>
          ) : (
            <>
              {groupPosts.map((p) => (
                <PostPreview post={p} key={p.post_id} />
              ))}
            </>
          )}
        </>
      );
    } else {
      // if no user is logged in, just show all posts with no filter options
      return (
        <>
          <h2
            className={`${
              isDarkTheme ? "page-heading-dark" : "page-heading-light"
            }`}
          >
            Recent Posts
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

          {pageData.map((p) => (
            <PostPreview post={p} key={p.post_id} />
          ))}
        </>
      );
    }
  };

  return (
    <div
      className={`RecentPostsPage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
