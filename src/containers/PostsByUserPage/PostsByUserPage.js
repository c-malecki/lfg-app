import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview, GeneralLink } from "../../components/components_index";
import axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { useSelector } from "react-redux";

export const PostsByUserPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { username } = useParams();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${username}/posts`)
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
        <div className="page-actions">
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
  const noContentMessage = `No posts by ${username} found.`;

  return (
    <div className="PostsByUserPage-content">
      <h2
        className={`${
          isDarkTheme ? "page-heading-dark" : "page-heading-light"
        }`}
      >
        <GeneralLink
          text={username}
          url={`/users/${username}`}
          addClass="PageHeaderLink"
        />
      </h2>

      {utilPageContent(pageStatus, content, noContentMessage)}
    </div>
  );
};
