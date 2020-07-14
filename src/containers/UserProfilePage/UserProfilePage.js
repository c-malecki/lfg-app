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
    user: null,
    posts: null,
  });
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const { user } = useParams();
  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/users/${user}`),
        axios.get(`${process.env.REACT_APP_API_URL}/users/${user}/posts`),
      ])
      .then(
        axios.spread((u, p) => {
          setUserForPage({
            user: u.data,
            posts: p.data,
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
  }, [user]);
  const userProfilePageContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong</div>;
    } else {
      const { user, posts } = userForPage;
      return (
        <>
          <UserProfileInfo user={user} />
          <UserBio username={user.username} bio={user.profile.bio} />
          <UserJoinedGroups userInfo={user} />
          <UserRecentPosts username={user.username} posts={posts} />
        </>
      );
    }
  };
  return (
    <div className="UserProfilePage-container">{userProfilePageContent()}</div>
  );
};
