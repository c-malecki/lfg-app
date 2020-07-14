import React, { useState, useEffect } from "react";
import {
  Unread,
  SentMessages,
  AllMessages,
  GeneralButton,
} from "../../components/components_index";
import { useSelector } from "react-redux";
import Axios from "axios";

export const MessagesPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [messageType, setMessageType] = useState(0);
  const [curMessages, setCurMessages] = useState(null);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { username } = currentUser;
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/messages`)
      .then((res) => {
        setCurMessages(res.data);
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
  }, [username]);
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
      return <AllMessages messages={curMessages} />;
    } else if (messageType === 1) {
      return <Unread messages={curMessages} />;
    } else if (messageType === 2) {
      return <SentMessages messages={curMessages} />;
    }
  };
  const messagesPageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
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
        </>
      );
    }
  };
  return (
    <div className="MessagesPage-container">
      <div className="MessagesPage-content">
        <h3 className="page-heading">Messages</h3>
        {messagesPageContent()}
      </div>
    </div>
  );
};
