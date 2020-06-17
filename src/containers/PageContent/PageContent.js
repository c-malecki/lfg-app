import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, UserProfile, NewPostPage } from "../containers_index";
import { Post } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/users/:user" component={UserProfile} />
        <Route path="/newpost" component={NewPostPage} />
      </Switch>
    </div>
  );
};
