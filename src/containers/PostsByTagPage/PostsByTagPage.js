import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview } from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { useSelector } from "react-redux";

export const PostsByTagPage = () => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { tag } = useParams();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/posts/tags/${tag}`)
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
  }, [tag]);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        {pageData.map((p) => (
          <PostPreview post={p} key={`post-${p.post_id}`} />
        ))}
      </>
    );
  };
  const noContentMessage = `There are no posts with the tag #${tag}.`;
  return (
    <div
      className={`PostsByTagPage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <h2
        className={`${
          isDarkTheme ? "page-heading-dark" : "page-heading-light"
        }`}
      >{`#${tag}`}</h2>
      <div className="page-actions">
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
