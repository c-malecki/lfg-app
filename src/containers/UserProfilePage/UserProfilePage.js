import React, { useState, useEffect } from "react";
import {
  UserProfileInfo,
  UserJoinedGroups,
  UserBio,
  UserRecentPosts,
} from "../../components/components_index";
import axios from "axios";
import { useParams } from "react-router-dom";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const UserProfilePage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
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
          setPageStatus({
            isLoading: false,
            error: null,
            pageData: {
              userData: u.data,
              userPostData: p.data,
            },
          });
        })
      )
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
    const { userData, userPostData } = pageData;
    return (
      <div className="UserProfilePage-content">
        <div className="UserProfile-content-left">
          <UserProfileInfo
            userForPageUsername={userData.username}
            userForpageProfile={userData.profile}
            date_joined={userData.account.date_joined}
            user_id={userData.user_id}
          />
          <UserBio
            userForPageUsername={userData.username}
            bio={userData.profile.bio}
          />
          <UserJoinedGroups
            userForPageUsername={userData.username}
            userForPageGroups={userData.groups}
          />
        </div>
        <div className="UserProfile-content-right">
          <UserRecentPosts
            userForPageUsername={userData.username}
            userForPagePosts={userPostData}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="UserProfilePage-container">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
