import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview, GeneralLink } from "../../components/components_index";
import axios from "axios";

export const PostsByUserPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [postsForPage, setPostsForPage] = useState(null);
  const { username } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${username}/posts`)
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
  }, [username]);

  const postsByUserContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
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
    <div className="PostsByUserPage-content">
      <h2 className="page-heading">
        <GeneralLink
          text={username}
          url={`/users/${username}`}
          addClass="PageHeaderLink"
        />
        's Posts
      </h2>
      <span className="search-placeholder">search placeholder</span>
      {postsByUserContent()}
    </div>
  );
};
