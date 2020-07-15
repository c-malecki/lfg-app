import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralLink } from "../../components/components_index";
import Axios from "axios";

export const GroupMembersPage = (props) => {
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
  });
  const [membersForPage, setMembersForPage] = useState(null);
  const { group } = useParams();
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}/members`)
      .then((res) => {
        setMembersForPage(res.data.group_members);
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
  }, [group]);
  const groupMembersContent = () => {
    const { isLoading, error } = pageStatus;
    if (isLoading) {
      return <div>loading...</div>;
    } else if (error) {
      return <div>Something went wrong.</div>;
    } else {
      return (
        <ul className="GroupMembers-list">
          {membersForPage.map((member) => {
            return (
              <li key={member.member_id}>
                <div className="GroupMember-item">
                  <GeneralLink
                    url={`/users/${member.username}`}
                    text={member.username}
                    addClass="UserLink"
                  />
                  <span>{member.role}</span>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  return (
    <div className="GroupMembersPage-content">
      <h2 className="page-heading">
        <GeneralLink
          url={`/g/${group}`}
          text={`${group}`}
          addClass="PageHeaderLink"
        />{" "}
        Members
      </h2>
      {groupMembersContent()}
    </div>
  );
};
