import React, { useState, useEffect } from "react";
import {
  PostPreview,
  GeneralLink,
  PageLoader,
} from "../../components/components_index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

export const GroupPostsPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [postsForPage, setPostsForPage] = useState(null);
  const { group } = useParams();
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}/posts`)
      .then((res) => {
        setPostsForPage(res.data);
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
  }, [group]);
  const groupPostsContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <PageLoader />;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          {postsForPage.map((p) => {
            return <PostPreview post={p} key={`post-${p.post_id}`} />;
          })}
        </>
      );
    }
  };
  return (
    <div className="GroupPostsPage-content">
      <div className="GroupPostsPage-head">
        <h2 className="page-heading">
          <GeneralLink
            url={`/g/${group}`}
            text={`${group}`}
            addClass="PageHeaderLink"
          />{" "}
          Posts
        </h2>

        <div className="GroupPostsPage-actions">
          {isLoggedIn ? (
            <GeneralLink
              url={`/g/${group}/newpost`}
              text="new post"
              addClass="general-theme-link"
            />
          ) : null}
          <span className="search-placeholder">search placeholder</span>
        </div>
      </div>
      {groupPostsContent()}
    </div>
  );
};
