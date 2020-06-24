import React, { useContext, useState } from "react";
import { AppStateContext } from "../../contexts/App/AppContext";
import {
  Inbox,
  SentMessages,
  GeneralButton,
} from "../../components/components_index";

export const MessagesPage = (props) => {
  const [isInbox, setIsInbox] = useState(true);
  const { currentUser } = useContext(AppStateContext);
  const { inbox } = currentUser.messages;
  const { sent } = currentUser.messages;
  const displayInbox = () => {
    setIsInbox(true);
  };
  const displaySent = () => {
    setIsInbox(false);
  };
  return (
    <div className="MessagesPage-container">
      <div className="Messages-container">
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
        {isInbox ? (
          <Inbox messages={inbox} />
        ) : (
          <SentMessages messages={sent} />
        )}
      </div>
    </div>
  );
};
