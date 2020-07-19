import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralLink } from "../../components/components_index";
import Axios from "axios";
import { utilPageContent } from "../../assets/util/utilPageContent";
import { useSelector } from "react-redux";

export const GroupMembersPage = (props) => {
  // Page state
  const [pageStatus, setPageStatus] = useState({
    isLoading: true,
    error: null,
    pageData: null,
  });
  const { group } = useParams();
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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
          error: error.response.data,
          pageData: null,
        });
      });
  }, [group]);
  const content = () => {
    const { pageData } = pageStatus;
    return (
      <>
        <ul className="GroupMembers-list">
          {pageData.map((m) => {
            return (
              <li
                key={m.member_id}
                className={`${
                  isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
                }`}
              >
                <div className="GroupMember-item">
                  <GeneralLink
                    url={`/users/${m.username}`}
                    text={m.username}
                    addClass="in-text-link"
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
  const noContentMessage = `${group} doesn't have any members.`;
  return (
    <div
      className={`GroupMembersPage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <h2
        className={`${
          isDarkTheme ? "page-heading-dark" : "page-heading-light"
        }`}
      >
        <GeneralLink
          url={`/g/${group}`}
          text={`${group}`}
          addClass="PageHeaderLink"
        />{" "}
      </h2>
      {utilPageContent(pageStatus, content, noContentMessage)}
    </div>
  );
};
