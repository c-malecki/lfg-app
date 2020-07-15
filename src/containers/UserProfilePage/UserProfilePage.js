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
  const [userForPage, setUserForPage] = useState({
    userForPageData: null,
    userForPagePosts: null,
  });
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const { username } = useParams();
  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/users/${username}`),
        axios.get(`${process.env.REACT_APP_API_URL}/users/${username}/posts`),
      ])
      .then(
        axios.spread((u, p) => {
          setUserForPage({
            userForPageData: u.data,
            userForPagePosts: p.data,
          });
          setPageStatus({
            isLoading: false,
            error: null,
          });
        })
      )
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.message,
        });
      });
  }, [username]);
  const userProfilePageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong</div>;
    } else {
      const { userForPageData, userForPagePosts } = userForPage;
      return (
        <>
          <UserProfileInfo
            userForPageUsername={userForPageData.username}
            userForpageProfile={userForPageData.profile}
            date_joined={userForPageData.account.date_joined}
            user_id={userForPageData.user_id}
          />
          <UserBio
            userForPageUsername={userForPageData.username}
            bio={userForPageData.profile.bio}
          />
          <UserJoinedGroups
            userForPageUsername={userForPageData.username}
            userForPageGroups={userForPageData.groups}
          />
          <UserRecentPosts
            userForPageUsername={userForPageData.username}
            userForPagePosts={userForPagePosts}
          />
        </>
      );
    }
  };
  return (
    <div className="UserProfilePage-content">{userProfilePageContent()}</div>
  );
};
