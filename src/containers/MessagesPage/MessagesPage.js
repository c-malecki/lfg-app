import React, { useContext, useState, useEffect } from "react";
import { UsersState, MessagesState } from "../../contexts/context_index";
import {
  Unread,
  SentMessages,
  AllMessages,
  GeneralButton,
} from "../../components/components_index";

export const MessagesPage = (props) => {
  const [messageType, setMessageType] = useState(0);
  const [curMessages, setCurMessages] = useState(null);
  const { currentUser } = useContext(UsersState);
  const { userMessages } = useContext(MessagesState);
  useEffect(() => {
    if (currentUser && userMessages) {
      const user = userMessages.find(
        (user) => user.user_name === currentUser.user_name
      );
      const { messages } = user;
      const sent = messages.filter((m) => m.sender === true);
      const unread = messages.filter((m) => m.read === false);
      setCurMessages({
        all: messages,
        unread,
        sent,
      });
    }
  }, [currentUser, userMessages]);
  const toggleAll = () => {
    setMessageType(0);
  };
  const toggleUnread = () => {
    setMessageType(1);
  };
  const toggleSent = () => {
    setMessageType(2);
  };
  const displayMessageType = () => {
    if (messageType === 0) {
      return <AllMessages messages={curMessages.all} />;
    } else if (messageType === 1) {
      return <Unread messages={curMessages.unread} />;
    } else if (messageType === 2) {
      return <SentMessages messages={curMessages.sent} />;
    }
  };
  return (
    <div className="MessagesPage-container">
      <div className="Messages-action-bar">
        <GeneralButton
          method={toggleAll}
          text="All"
          addClass="general-theme-button"
        />
        <GeneralButton
          method={toggleUnread}
          text="unread"
          addClass="general-theme-button"
        />
        <GeneralButton
          method={toggleSent}
          text="sent"
          addClass="general-theme-button"
        />
      </div>
      {currentUser && curMessages ? displayMessageType() : null}
    </div>
  );
};
