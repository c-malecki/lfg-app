import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  UserProfile,
  NewPostPage,
  LogInpage,
} from "../containers_index";
import { Post, PostDeleted } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/users/:user" component={UserProfile} />
        <Route path="/newpost" component={NewPostPage} />
        <Route path="/post-deleted" component={PostDeleted} />
        <Route path="/login" component={LogInpage} />
      </Switch>
    </div>
  );
};
