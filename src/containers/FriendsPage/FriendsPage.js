import React, { useState, useEffect } from "react";
import {
  PendingFriends,
  AcceptedFriends,
} from "../../components/components_index";
import { useSelector } from "react-redux";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const FriendsPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { currentUser } = useSelector((state) => state.userReducer);
  const { username } = currentUser;
  // GET page data and set page status
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/friends`)
      .then((res) => {
        setPageStatus({
          isLoading: false,
          error: null,
          pageData: res.data.friends,
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
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <PendingFriends pending={pageData.pending} currentUsername={username} />
        <AcceptedFriends
          accepted={pageData.accepted}
          currentUsername={username}
        />
      </>
    );
  };
  return (
    <div className="FriendsPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
