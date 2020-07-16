import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MessageBody,
  MessageReplies,
  PageLoader,
  ReplyToMessageForm,
} from "../../components/components_index";
import Axios from "axios";
import { useSelector } from "react-redux";

export const ViewMessagePage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/messages/${id}`)
      .then((res) => {
        setMessage(res.data);
        setPageStatus({
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.response.data,
        });
      });
  }, [id]);
  // add new reply to component state after successful POST request
  const addNewReply = (newReply) => {
    const { replies } = message;
    setMessage((prevState) => ({
      ...prevState,
      replies: [...replies, newReply],
    }));
  };
  const viewMessageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <PageLoader />;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <>
          <MessageBody message={message} />{" "}
          {message.replies.length > 0
            ? message.replies.map((r) => {
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
    }
  };
  return <div className="ViewMessagePage-content">{viewMessageContent()}</div>;
};
