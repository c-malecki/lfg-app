import React, { useState, useEffect } from "react";
import { SendMessageForm, PageLoader } from "../../components/components_index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export const NewMessagePage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [messageStatus, setMessageStatus] = useState({
    success: false,
    error: null,
    message_id: null,
  });
  const [userList, setUserList] = useState(null);
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/list`)
      .then((res) => {
        setUserList(res.data);
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
  }, []);
  const messageSuccess = () => {
    const { success, error, message_id } = messageStatus;
    if (success) {
      history.push(`/messages/message/${message_id}`);
    } else if (error) {
      return;
    }
  };
  const newMessageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <PageLoader />;
    }
    if (error) {
      return <div>Something went wrong.</div>;
    } else {
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
            userList={userList}
            to={to}
            from={from}
            setMessageStatus={setMessageStatus}
          />
          {messageSuccess()}
        </>
      );
    }
  };
  return <div className="NewMessagePage-content">{newMessageContent()}</div>;
};
