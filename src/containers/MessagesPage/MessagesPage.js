import React, { useState, useEffect } from "react";
import {
  UnreadMessages,
  SentMessages,
  AllMessages,
  GeneralButton,
} from "../../components/components_index";
import { useSelector } from "react-redux";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const MessagesPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  // Controls which messages are shown (still need to refactor to differentiate + add "read" property to message objects in DB)
  const [messageType, setMessageType] = useState(0);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { username } = currentUser;
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/messages`)
      .then((res) => {
        setPageStatus({
          isLoading: false,
          error: null,
          pageData: res.data,
        });
      })
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.message,
          pageData: null,
        });
      });
  }, [username]);
  // changes whether All, Unread, or Sent messages are shown. Needs to be refactored/maybe use sub routing
  // so that the URL is /messages/#all or /messages/#unread, etc...
  const toggleAll = () => {
    setMessageType(0);
  };
  const toggleUnread = () => {
    setMessageType(1);
  };
  const toggleSent = () => {
    setMessageType(2);
  };
  const content = () => {
    const { pageData } = pageStatus;
    const displayMessageType = () => {
      if (messageType === 0) {
        return <AllMessages messages={pageData} />;
      } else if (messageType === 1) {
        return <UnreadMessages messages={pageData} />;
      } else if (messageType === 2) {
        return <SentMessages messages={pageData} />;
      }
    };
    return (
      <>
        <h3 className="page-heading">Messages</h3>
        <div className="page-actions">
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
        {currentUser && pageData ? displayMessageType() : null}
      </>
    );
  };
  return (
    <div className="MessagesPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
