import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";
import { utilComponentContent } from "../../../assets/util/utilComponentContent";

export const GroupMembers = (props) => {
  const { members, group } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const content = () => {
    return (
      <>
        <ul
          className={`GroupMembers-list ${
            isDarkTheme ? "ui-content-dark" : "ui-content-light"
          }`}
        >
          {members.map((m) => {
            return (
              <li key={m.member_id}>
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
    <div className="GroupMembers-container">
      <div
        className={`${
          isDarkTheme ? "component-head-dark" : "component-head-light"
        }`}
      >
        <h3>Members</h3>
        <GeneralLink url={`/g/${group}/members`} text="See All" />
      </div>
      {utilComponentContent(members, content, noContentMessage)}
    </div>
  );
};
