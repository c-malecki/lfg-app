import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GroupInfo,
  GroupMembers,
  GroupRecentPosts,
} from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const GroupPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { group } = useParams();
  useEffect(() => {
    Axios.all([
      Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}`),
      Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}/posts`),
    ])
      .then(
        Axios.spread((g, p) => {
          setPageStatus({
            isLoading: false,
            error: null,
            pageData: {
              group: g.data,
              posts: p.data,
            },
          });
        })
      )
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.response.data,
          pageData: null,
        });
      });
  }, [group]);
  const content = () => {
    const { group, posts } = pageStatus.pageData;
    return (
      <>
        <GroupInfo group={group} />
        <GroupMembers members={group.group_members} group={group.group_name} />
        <GroupRecentPosts group={group.group_name} posts={posts} />
      </>
    );
  };
  return (
    <div className="GroupPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
