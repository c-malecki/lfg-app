import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageBody, MessageReplies } from "../../components/components_index";
import Axios from "axios";
import { ReplyToMessageForm } from "../../components/Messages/forms/ReplyToMessageForm";
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
  const viewMessageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
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
          <ReplyToMessageForm username={currentUser.username} message_id={id} />
        </>
      );
    }
  };
  return <div className="ViewMessagePage-content">{viewMessageContent()}</div>;
};
