import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageBody } from "../../components/components_index";
import { UsersState } from "../../contexts/context_index";

export const ViewMessagePage = (props) => {
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const { currentUser } = useContext(UsersState);
  useEffect(() => {
    let messageToFind = {};
    if (currentUser !== null) {
      messageToFind = currentUser.messages.inbox.find(
        (message) => message.message_id === id
      );
    }

    if (messageToFind !== undefined && messageToFind !== null) {
      setMessage(messageToFind);
    } else {
      messageToFind = currentUser.messages.sent.find((message) => {
        return message.message_id === id;
      });
      setMessage(messageToFind);
    }
  }, [id, currentUser]);

  return (
    <div className="ViewMessagePage-container">
      <div className="ViewMessagePage-content">
        {message ? <MessageBody message={message} /> : <div>...loading</div>}
      </div>
    </div>
  );
};
