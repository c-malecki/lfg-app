import React, { useState, useEffect } from "react";
import { NewPostForm } from "../../components/components_index";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

export const NewPostPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [postStatus, setPostStatus] = useState({
    success: false,
    error: null,
    post_id: null,
  });
  const [postTags, setPostTags] = useState(null);
  const history = useHistory();
  const { group } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/v1/posts/tags")
      .then((res) => {
        setPostTags(res.data);
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
  const postSuccess = () => {
    const { success, error, post_id } = postStatus;
    if (success) {
      history.push(`/g/${group}/posts/${post_id}`);
    } else if (error) {
      return;
    }
  };
  const newPostContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          <NewPostForm
            post_tags={postTags}
            post_author={currentUser.username}
            group={group}
            setPostStatus={setPostStatus}
          />
          {postSuccess()}
        </>
      );
    }
  };
  return (
    <div className="NewPostPage-container">
      <div className="NewPostPage-content">{newPostContent()}</div>
    </div>
  );
};
