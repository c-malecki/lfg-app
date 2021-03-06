import React, { useState, useEffect } from "react";
import { PostPreview, GeneralLink } from "../../components/components_index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { sortByDate } from "../../assets/util/sortByDate";

export const GroupPostsPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { group } = useParams();
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}/posts`)
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
  }, [group]);

  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        {pageData.map((p) => {
          return <PostPreview post={p} key={`post-${p.post_id}`} />;
        })}
      </>
    );
  };

  const noContentMessage = `No posts in ${group} found.`;

  return (
    <div
      className={`GroupPostsPage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <h2
        className={`${
          isDarkTheme ? "page-heading-dark" : "page-heading-light"
        }`}
      >
        <GeneralLink
          url={`/g/${group}`}
          text={`${group}`}
          addClass="PageHeaderLink"
        />
      </h2>

      <div className="page-actions">
        {isLoggedIn ? (
          <GeneralLink
            url={`/g/${group}/newpost`}
            text="new post"
            addClass={`${isDarkTheme ? "ui-link-dark " : "ui-link-light"}`}
          />
        ) : null}
        <span
          className={`search-placeholder ${
            isDarkTheme ? "textinput-dark" : "textinput-light"
          }`}
        >
          search placeholder
        </span>
      </div>
      {utilPageContent(pageStatus, content, noContentMessage)}
    </div>
  );
};
