import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  UserProfile,
  NewPostPage,
  LogInpage,
  PostsByTagPage,
} from "../containers_index";
import { Post, PostDeleted } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts/tags/:tag" component={PostsByTagPage} />
        <Route path="/users/:user" component={UserProfile} />
        <Route path="/newpost" component={NewPostPage} />
        <Route path="/post-deleted" component={PostDeleted} />
        <Route path="/login" component={LogInpage} />
      </Switch>
    </div>
  );
};
