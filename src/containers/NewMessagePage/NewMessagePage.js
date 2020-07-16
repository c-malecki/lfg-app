import React, { useState, useEffect } from "react";
import { SendMessageForm } from "../../components/components_index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const NewMessagePage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  // new message state
  const [messageStatus, setMessageStatus] = useState({
    success: false,
    error: null,
    message_id: null,
  });
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/list`)
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
  }, []);
  // If the message POST request is successful, go to the message
  const messageSuccess = () => {
    const { success, error, message_id } = messageStatus;
    if (success) {
      history.push(`/messages/message/${message_id}`);
    } else if (error) {
      return;
    }
  };
  const content = () => {
    const { pageData } = pageStatus;
    const to = props.location.messageProps
      ? props.location.messageProps.toUser
      : "";
    const from = {
      username: currentUser.username,
      user_id: currentUser.user_id,
    };
    return (
      <>
        <SendMessageForm
          userList={pageData}
          to={to}
          from={from}
          setMessageStatus={setMessageStatus}
        />
        {messageSuccess()}
      </>
    );
  };
  return (
    <div className="NewMessagePage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
