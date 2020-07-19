import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";
import { utilComponentContent } from "../../../assets/util/utilComponentContent";

export const UserJoinedGroups = (props) => {
  const { userForPageGroups, userForPageUsername } = props;
  const { joined } = userForPageGroups;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const content = () => {
    return (
      <>
        <ul className="UserJoinedGroups-list">
          {joined.map((g) => {
            return (
              <li
                key={g.group_id}
                className={` ${
                  isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
                }`}
              >
                <GeneralLink
                  url={`/g/${g.group_name}`}
                  text={g.group_name}
                  addClass="in-text-link"
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  const noContentMessage = `${userForPageUsername} hasn't joined any groups yet.`;
  return (
    <div className="UserJoinedGroups-container">
      <div
        className={`${
          isDarkTheme ? "component-head-dark" : "component-head-light"
        }`}
      >
        <h3>Groups</h3>
        <GeneralLink url={`${userForPageUsername}/groups`} text="See All" />
      </div>

      {utilComponentContent(joined, content, noContentMessage)}
    </div>
  );
};
