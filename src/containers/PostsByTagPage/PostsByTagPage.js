import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostPreview } from "../../components/components_index";
import axios from "axios";

export const PostsByTagPage = () => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [postsForPage, setPostsForPage] = useState(null);
  const { tag } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/bytags/${tag}`)
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
  }, [tag]);
  const postsByTagContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          {postsForPage.map((p) => (
            <PostPreview post={p} key={`post-${p.post_id}`} />
          ))}
        </>
      );
    }
  };
  return (
    <div className="PostsByTagPage-container">
      <div className="PostsByTagPage-content">
        <h2 className="page-heading">{`#${tag}`}</h2>
        <span className="search-placeholder">search placeholder</span>
        {postsByTagContent()}
      </div>
    </div>
  );
};
