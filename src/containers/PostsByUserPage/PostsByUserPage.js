import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview, GeneralLink } from "../../components/components_index";
import axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const PostsByUserPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { username } = useParams();
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
        <h2 className="page-heading">
          <GeneralLink
            text={username}
            url={`/users/${username}`}
            addClass="PageHeaderLink"
          />
          's Posts
        </h2>
        <span className="search-placeholder">search placeholder</span>
        {pageData.map((p) => {
          return <PostPreview post={p} key={`post-${p.post_id}`} />;
        })}
      </>
    );
  };
  return (
    <div className="PostsByUserPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
