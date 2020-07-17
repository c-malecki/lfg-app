import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const UserJoinedGroups = (props) => {
  const { userForPageGroups, userForPageUsername } = props;
  const { joined } = userForPageGroups;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
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

      <ul
        className={`UserJoinedGroups-list ${
          isDarkTheme ? "ui-content-dark" : "ui-content-light"
        }`}
      >
        {joined.map((g) => {
          return (
            <li key={g.group_id}>
              <GeneralLink
                url={`/g/${g.group_name}`}
                text={g.group_name}
                addClass="in-text-link"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
