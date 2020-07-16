import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralLink } from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";

export const GroupMembersPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { group } = useParams();
  // GET page data and set page status
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/groups/${group}/members`)
      .then((res) => {
        setPageStatus({
          isLoading: false,
          error: null,
          pageData: res.data.group_members,
        });
      })
      .catch((error) => {
        setPageStatus({
          isLoading: false,
          error: error.message,
          pageData: null,
        });
      });
  }, [group]);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <h2 className="page-heading">
          <GeneralLink
            url={`/g/${group}`}
            text={`${group}`}
            addClass="PageHeaderLink"
          />{" "}
          Members
        </h2>
        <ul className="GroupMembers-list">
          {pageData.map((m) => {
            return (
              <li key={m.member_id}>
                <div className="GroupMember-item">
                  <GeneralLink
                    url={`/users/${m.username}`}
                    text={m.username}
                    addClass="UserLink"
                  />
                  <span>{m.role}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <div className="GroupMembersPage-content">
      {utilPageContent(pageStatus, content)}
    </div>
  );
};
