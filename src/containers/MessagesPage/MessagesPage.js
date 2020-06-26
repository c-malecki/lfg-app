import React, { useContext, useState } from "react";
import { UsersState } from "../../contexts/context_index";
import {
  Inbox,
  SentMessages,
  GeneralButton,
} from "../../components/components_index";

export const MessagesPage = (props) => {
  const [isInbox, setIsInbox] = useState(true);
  const { currentUser } = useContext(UsersState);
  const inbox = currentUser ? currentUser.messages.inbox : null;
  const sent = currentUser ? currentUser.messages.sent : null;
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
        {currentUser && inbox && sent ? (
          <>
            {isInbox ? (
              <Inbox messages={inbox} />
            ) : (
              <SentMessages messages={sent} />
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
