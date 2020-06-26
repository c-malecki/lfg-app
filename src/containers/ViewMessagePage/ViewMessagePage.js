import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageBody } from "../../components/components_index";
import { UsersState, MessagesState } from "../../contexts/context_index";

export const ViewMessagePage = (props) => {
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const { currentUser } = useContext(UsersState);
  const { userMessages } = useContext(MessagesState);
  useEffect(() => {
    let messageToFind = {};
    let user = {};
    if (currentUser && userMessages) {
      user = userMessages.find((u) => u.user_name === currentUser.user_name);
      messageToFind = user.messages.find(
        (message) => message.message_id === id
      );
      setMessage(messageToFind);
    }
  }, [id, currentUser, userMessages]);

  return (
    <div className="ViewMessagePage-container">
      <div className="ViewMessagePage-content">
        {message ? <MessageBody message={message} /> : <div>...loading</div>}
      </div>
    </div>
  );
};
