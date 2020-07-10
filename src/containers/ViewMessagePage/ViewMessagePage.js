import React from "react";
import { useParams } from "react-router-dom";
import { MessageBody, MessageReplies } from "../../components/components_index";
import { useSelector } from "react-redux";

export const ViewMessagePage = (props) => {
  const { id } = useParams();
  const { userMessages } = useSelector((state) => state.messagesReducer);
  const message = userMessages.find((m) => m.message_thread_id === id);
  return (
    <div className="ViewMessagePage-container">
      <div className="ViewMessagePage-content">
        {message ? (
          <>
            <MessageBody message={message} />{" "}
            {message.replies.length > 0
              ? message.replies.map((r) => {
                  return <MessageReplies reply={r} key={r.reply_id} />;
                })
              : null}
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
          </>
        ) : (
          <div>...loading</div>
        )}
      </div>
    </div>
  );
};
