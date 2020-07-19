import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MessageBody,
  MessageReplies,
  ReplyToMessageForm,
  GeneralLink,
} from "../../components/components_index";
import Axios from "axios";
import { useSelector } from "react-redux";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const ViewMessagePage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/messages/${id}`)
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
          error: error.response.data,
          pageData: null,
        });
      });
  }, [id]);

  const content = () => {
    const { pageData } = pageStatus;
    // add new reply to component state after successful POST request
    const addNewReply = (newReply) => {
      setPageStatus((prevState) => ({
        ...prevState,
        pageData: {
          ...prevState.pageData,
          replies: [...prevState.pageData.replies, newReply],
        },
      }));
    };
    return (
      <>
        <MessageBody message={pageData} />{" "}
        {pageData.replies.length > 0
          ? pageData.replies.map((r) => {
              return <MessageReplies reply={r} key={r.reply_id} />;
            })
          : null}
        <ReplyToMessageForm
          username={currentUser.username}
          message_id={id}
          addNewReply={addNewReply}
        />
      </>
    );
  };

  return (
    <div
      className={`ViewMessagePage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <h2
        className={`${
          isDarkTheme ? "page-heading-dark" : "page-heading-light"
        }`}
      >
        <GeneralLink
          url={`/messages`}
          text={`Back to Messages`}
          addClass="large-link"
        />
      </h2>
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
