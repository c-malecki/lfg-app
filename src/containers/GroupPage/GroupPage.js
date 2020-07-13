import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GroupInfo,
  GroupMembers,
  GroupNewPosts,
} from "../../components/components_index";
import axios from "axios";

export const GroupPage = (props) => {
  const [groupForPage, setGroupForPage] = useState({
    group: null,
    posts: null,
  });
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const { group } = useParams();
  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:5000/api/v1/groups/${group}`),
        axios.get(`http://localhost:5000/api/v1/groups/${group}/posts`),
      ])
      .then(
        axios.spread((g, p) => {
          setGroupForPage({
            group: g.data,
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
          error: error.response.data,
        });
      });
  }, [group]);
  const groupPageContent = () => {
    const { isLoading, error } = pageStatus;
    const { group, posts } = groupForPage;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <>
          <GroupInfo group={group} />
          <GroupMembers
            members={group.group_members}
            group={group.group_name}
          />
          <GroupNewPosts group={group.group_name} posts={posts} />
        </>
      );
    }
  };
  return <div className="GroupPage-container">{groupPageContent()}</div>;
};
