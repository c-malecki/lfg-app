import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GeneralLink,
  Comments,
  PostBody,
} from "../../components/components_index";
import axios from "axios";
import { useSelector } from "react-redux";

export const PostPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const { id, group } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  const [postForPage, setPostForPage] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/posts/ids/${id}`)
      .then((res) => {
        setPostForPage(res.data);
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
  }, [id]);
  const postPageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          <PostBody content={postForPage} currentUser={currentUser} />
          <Comments
            currentUser={currentUser}
            comments={postForPage.comments}
            post_id={postForPage.post_id}
          />
          {/* {currentUser ? (
            <CommentForm
              post_id={postForPage.post_id}
              currentUser={currentUser}
            />
          ) : null} */}
        </>
      );
    }
  };

  return (
    <div className="PostPage-container">
      <div className="PostPage-content">
        <GeneralLink
          url={`/g/${group}/posts`}
          text={`back to ${group} posts`}
          addClass="PageContentLink"
        />
        {postPageContent()}
      </div>
    </div>
  );
};
