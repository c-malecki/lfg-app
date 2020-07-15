import React, { useState, useEffect } from "react";
import { PostPreview, GeneralButton } from "../../components/components_index";
import { useSelector } from "react-redux";
import axios from "axios";

export const RecentPostsPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [postsForPage, setPostsForPage] = useState(null);
  const [viewAll, setViewAll] = useState(true);
  const { currentUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
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
  }, []);

  const handleToggleAll = () => {
    setViewAll(true);
  };
  const handleToggleGroups = () => {
    setViewAll(false);
  };
  const recentPostsContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else if (currentUser && postsForPage) {
      const groupPosts = postsForPage.filter(
        (p) => currentUser.groups.group_name_list.indexOf(p.posted_in) > -1
      );
      return (
        <>
          <div className="RecentPosts-actions">
            <GeneralButton
              text="all"
              addClass="general-theme-button"
              method={() => handleToggleAll()}
            />
            <GeneralButton
              text="groups"
              addClass="general-theme-button"
              method={() => handleToggleGroups()}
            />
            <span className="search-placeholder">search placeholder</span>
          </div>
          {viewAll ? (
            <>
              {postsForPage.map((p) => (
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
      return (
        <>
          <span className="search-placeholder">search placeholder</span>
          {postsForPage.map((p) => (
            <PostPreview post={p} key={p.post_id} />
          ))}
        </>
      );
    }
  };
  return (
    <div className="RecentPostsPage-content">
      <h2 className="page-heading">Recent Posts</h2>
      {recentPostsContent()}
    </div>
  );
};
