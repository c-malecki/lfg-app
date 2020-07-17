import React, { useState, useEffect } from "react";
import { NewPostForm, GeneralLink } from "../../components/components_index";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const NewPostPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  // New post state
  const [postStatus, setPostStatus] = useState({
    success: false,
    error: null,
    post_id: null,
  });
  const history = useHistory();
  const { group } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/posts/tags`)
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
  }, []);
  // If the post POST request is successful, go to the post
  const postSuccess = () => {
    const { success, error, post_id } = postStatus;
    if (success) {
      history.push(`/g/${group}/posts/${post_id}`);
    } else if (error) {
      return;
    }
  };
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <h2
          className={`${
            isDarkTheme ? "page-heading-dark" : "page-heading-light"
          }`}
        >
          New Post In{" "}
          <GeneralLink
            url={`/g/${group}`}
            text={`g/${group}`}
            addClass="PageHeaderLink"
          />
        </h2>
        <NewPostForm
          post_tags={pageData}
          post_author={currentUser.username}
          group={group}
          setPostStatus={setPostStatus}
        />
        {postSuccess()}
      </>
    );
  };

  return (
    <div className="NewPostPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
