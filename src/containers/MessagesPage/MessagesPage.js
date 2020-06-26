import React, { useContext, useState, useEffect } from "react";
import { UsersState, MessagesState } from "../../contexts/context_index";
import {
  Inbox,
  SentMessages,
  GeneralButton,
} from "../../components/components_index";

export const MessagesPage = (props) => {
  const [isInbox, setIsInbox] = useState(true);
  const [curMessages, setCurMessages] = useState(null);
  const { currentUser } = useContext(UsersState);
  const { userMessages } = useContext(MessagesState);
  useEffect(() => {
    if (currentUser && userMessages) {
      const user = userMessages.find(
        (user) => user.user_name === currentUser.user_name
      );
      const { inbox, sent } = user;
      setCurMessages({
        inbox,
        sent,
      });
    }
  }, [currentUser, userMessages]);
  const displayInbox = () => {
    setIsInbox(true);
  };
  const displaySent = () => {
    setIsInbox(false);
  };
  return (
    <div className="MessagesPage-container">
      <div className="MessagesPage-content">
        <div className="Messages-action-bar">
          <GeneralButton
            method={displayInbox}
            text="inbox"
            addClass="general-theme-button"
          />
          <GeneralButton
            method={displaySent}
            text="sent"
            addClass="general-theme-button"
          />
        </div>
        {currentUser && curMessages ? (
          <>
            {isInbox ? (
              <Inbox messages={curMessages.inbox} />
            ) : (
              <SentMessages messages={curMessages.sent} />
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
