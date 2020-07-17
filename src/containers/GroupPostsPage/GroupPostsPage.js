import React, { useState, useEffect } from "react";
import { PostPreview, GeneralLink } from "../../components/components_index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

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
  }, [group]);
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

        {pageData.map((p) => {
          return <PostPreview post={p} key={`post-${p.post_id}`} />;
        })}
      </>
    );
  };
  return (
    <div className="GroupPostsPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
