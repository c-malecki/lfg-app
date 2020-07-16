import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GeneralLink,
  PostComments,
  PostBody,
  CommentForm,
} from "../../components/components_index";
import Axios from "axios";
import { useSelector } from "react-redux";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const ViewPostPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { id, group } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/posts/ids/${id}`)
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
  }, [id]);
  const content = () => {
    const { pageData } = pageStatus;
    // adds new comment to component state after successful POST request
    const addNewComment = (comment) => {
      setPageStatus((prevState) => ({
        ...prevState,
        pageData: {
          ...prevState.pageData,
          comments: [...prevState.pageData.comments, comment],
        },
      }));
    };
    // removes deleted comment from component state after successful POST request
    const deleteComment = (deleteId) => {
      const { comments } = pageData;
      const newComments = comments.filter((c) => c.comment_id !== deleteId);
      setPageStatus((prevState) => ({
        ...prevState,
        pageData: { ...prevState.pageData, comments: newComments },
      }));
    };
    return (
      <>
        <GeneralLink
          url={`/g/${group}/posts`}
          text={`back to ${group} posts`}
          addClass="PageContentLink"
        />
        <PostBody
          content={pageData}
          currentUser={currentUser}
          post_id={pageData.post_id}
          group={group}
        />
        <PostComments
          currentUser={currentUser}
          comments={pageData.comments}
          post_id={pageData.post_id}
          deleteComment={deleteComment}
        />
        {currentUser ? (
          <CommentForm
            post_id={pageData.post_id}
            currentUser={currentUser}
            addNewComment={addNewComment}
          />
        ) : null}
      </>
    );
  };
  return (
    <div className="PostPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
