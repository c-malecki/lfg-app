import React from "react";
import { LfgMiniBanner, GeneralLink } from "../../components/components_index";

export const HomePage = (props) => {
  return (
    <div className="HomePage-container">
      <div className="HomePage-content">
        <div className="HomePage-welcome">
          <h1 className="page-heading">Welcome to</h1>
          <LfgMiniBanner />
          <h3 className="component-heading">
            LFG is a social media site for connecting gamers to play groups.
          </h3>
        </div>

        <div className="HomePage-getting-started">
          <h2 className="component-heading">Getting started</h2>
          <p>
            <GeneralLink
              url="/g"
              text="Groups"
              addClass="PostPreviewHeadLink"
            />
            are the life blood of LFG. Groups are centered around a specific
            genre, franchise, or game. Posts are made by members of a group.
            Recent posts can be seen on the group's page and all posts within
            the group can be found at the group's posts page.
          </p>
          <p>
            <GeneralLink
              url="/posts"
              text="Posts"
              addClass="PostPreviewHeadLink"
            />
            in the page content navigation menu show all posts within all groups
            or by all groups you are part of.
          </p>
        </div>
      </div>
    </div>
  );
};
