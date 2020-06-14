import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, PostPage, UserProfile } from "../containers_index";
import { Post } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post" component={PostPage} />
        <Route path="/post/:id" component={Post} />
        <Route path="/users/:user" component={UserProfile} />
      </Switch>
    </div>
  );
};
