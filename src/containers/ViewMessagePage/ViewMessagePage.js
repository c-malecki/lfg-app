import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageBody, MessageReplies } from "../../components/components_index";
import Axios from "axios";

export const ViewMessagePage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`http://localhost:5000/api/v1/messages/${id}`)
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
          error: error.message,
        });
      });
  }, [id]);
  const viewMessageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          <MessageBody message={message} />{" "}
          {message.replies.length > 0
            ? message.replies.map((r) => {
                return <MessageReplies reply={r} key={r.reply_id} />;
              })
            : null}
        </>
      );
    }
  };
  return (
    <div className="ViewMessagePage-container">
      <div className="ViewMessagePage-content">
        {viewMessageContent()}
        {/* <ReplyToMessageForm
              message_id={message.message_id}
              to={
                currentUser.user_name === message.to_username
                  ? message.from_username
                  : message.to_username
              }
              from={
                currentUser.user_name === message.from_username
                  ? message.from_username
                  : message.to_username
              }
            /> */}
      </div>
    </div>
  );
};
