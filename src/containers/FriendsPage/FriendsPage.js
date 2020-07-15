import React, { useState, useEffect } from "react";
import {
  PendingFriends,
  AcceptedFriends,
} from "../../components/components_index";
import { useSelector } from "react-redux";
import Axios from "axios";

export const FriendsPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [friendsData, setFriendsData] = useState(null);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { username } = currentUser;
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/friends`)
      .then((res) => {
        setFriendsData(res.data.friends);
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
  const friendsPageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <>
          <PendingFriends
            pending={friendsData.pending}
            currentUsername={username}
          />
          <AcceptedFriends
            accepted={friendsData.accepted}
            currentUsername={username}
          />
        </>
      );
    }
  };
  return (
    <div className="FriendsPage-container">
      <div className="FriendsPage-content">{friendsPageContent()}</div>
    </div>
  );
};
