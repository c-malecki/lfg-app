import React, { useState, useEffect } from "react";
import {
  UserProfileInfo,
  UserJoinedGroups,
  UserBio,
  UserRecentPosts,
} from "../../components/components_index";
import axios from "axios";
import { useParams } from "react-router-dom";

export const UserProfilePage = (props) => {
  const [userForPage, setUserForPage] = useState(null);
  const [pageStatus, setPageStatus] = useState({
    loading: true,
    error: null,
  });
  const { user } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/profile?username=${user}`)
      .then((res) => {
        setUserForPage(res.data);
        setPageStatus({
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setPageStatus({
          loading: false,
          error: error.message,
        });
      });
  }, [user]);
  const userProfilePageContent = () => {
    const { loading, error } = pageStatus;
    if (loading) {
      return <div>loading...</div>;
    } else if (!loading && error) {
      return <div>Something went wrong</div>;
    } else {
      return (
        <>
          <UserProfileInfo userInfo={userForPage} />
          <UserBio userInfo={userForPage} />
          <UserJoinedGroups userInfo={userForPage} />
          <UserRecentPosts username={userForPage.username} />
        </>
      );
    }
  };
  return (
    <div className="UserProfilePage-container">{userProfilePageContent()}</div>
  );
};
