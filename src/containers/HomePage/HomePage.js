import React from "react";
import { LfgMiniBanner, GeneralLink } from "../../components/components_index";
import { useSelector } from "react-redux";

export const HomePage = (props) => {
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div
      className={`HomePage-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      <div
        className={`HomePage-welcome-content ${
          isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
        }`}
      >
        <h1>Welcome to</h1>
        <LfgMiniBanner />
        <h3>
          LFG is a social media site for connecting gamers to play groups.
        </h3>
      </div>

      <div
        className={`HomePage-getting-started-content ${
          isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
        }`}
      >
        <h2>Getting Started</h2>
        <p>
          <GeneralLink url="/g" text="Groups" addClass="in-text-link" />
          are the life blood of LFG. Groups are centered around a specific
          genre, franchise, or game. Groups consist of members of the LFG
          community who want to connect with other users around a specific
          topic. You can view all posts within a group by checking the groups
          posts page or see the newest posts on the group's info page. <br />
          (Will change with more fleshed out group roles, privledges, options,
          etc...)
        </p>
        <p>
          <GeneralLink url="/posts" text="Posts" addClass="in-text-link" />
          in the page content navigation menu show all posts within all groups
          or by all groups you are part of. Users can currently add posts within
          any group. You can also view a user's posts from within their profile.{" "}
          <br />
          (Will change when user settings are added and more group features are
          fleshed out.)
        </p>
        <p>
          <GeneralLink
            url="/messages"
            text="Messages"
            addClass="in-text-link"
          />
          can be sent between all users currently, regardless of{" "}
          <GeneralLink url="/friends" text="Friend" addClass="in-text-link" />
          status. You can also request to be friends with other users of LFG.{" "}
          <br />
          (Will change when user interaction and friends is more fleshed out.)
        </p>
      </div>
    </div>
  );
};
