import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  UserProfilePage,
  NewPostPage,
  LogInPage,
  PostsByTagPage,
  PostPage,
} from "../containers_index";
import { PostDeleted } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Route exact path="/posts/tags/:tag" component={PostsByTagPage} />
        <Route path="/users/:user" component={UserProfilePage} />
        <Route path="/newpost" component={NewPostPage} />
        <Route path="/post-deleted" component={PostDeleted} />
        <Route path="/login" component={LogInPage} />
      </Switch>
    </div>
  );
};
