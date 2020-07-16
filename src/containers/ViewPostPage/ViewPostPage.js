import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GeneralLink,
  PostComments,
  PostBody,
  CommentForm,
  PageLoader,
} from "../../components/components_index";
import axios from "axios";
import { useSelector } from "react-redux";

export const ViewPostPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const { id, group } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  const [postForPage, setPostForPage] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/ids/${id}`)
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
  // adds new comment to component state after successful POST request
  const addNewComment = (comment) => {
    setPostForPage((prevState) => ({
      ...prevState,
      comments: [...prevState.comments, comment],
    }));
  };
  // removes deleted comment from component state after successful POST request
  const deleteComment = (deleteId) => {
    const { comments } = postForPage;
    const newComments = comments.filter((c) => c.comment_id !== deleteId);
    setPostForPage((prevState) => ({
      ...prevState,
      comments: newComments,
    }));
  };
  const postPageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <PageLoader />;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          <PostBody
            content={postForPage}
            currentUser={currentUser}
            post_id={postForPage.post_id}
          />
          <PostComments
            currentUser={currentUser}
            comments={postForPage.comments}
            post_id={postForPage.post_id}
            deleteComment={deleteComment}
          />
          {currentUser ? (
            <CommentForm
              post_id={postForPage.post_id}
              currentUser={currentUser}
              addNewComment={addNewComment}
            />
          ) : null}
        </>
      );
    }
  };

  return (
    <div className="PostPage-content">
      <GeneralLink
        url={`/g/${group}/posts`}
        text={`back to ${group} posts`}
        addClass="PageContentLink"
      />
      {postPageContent()}
    </div>
  );
};
