import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  UserProfilePage,
  NewPostPage,
  LogInPage,
  PostsByTagPage,
  PostPage,
  PostDeletedPage,
  MessagesPage,
  NewMessagePage,
  ViewMessagePage,
  GroupPage,
  GroupsListPage,
} from "../containers_index";
import { PageNav } from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-content">
      <PageNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/g/:group/posts/:id" component={PostPage} />
        <Route exact path="/posts/tags/:tag" component={PostsByTagPage} />
        <Route path="/users/:user" component={UserProfilePage} />
        <Route path="/post-deleted" component={PostDeletedPage} />
        <Route path="/login" component={LogInPage} />
        <Route exact path="/messages" component={MessagesPage} />
        <Route exact path="/messages/:id" component={ViewMessagePage} />
        <Route exact path="/messages/new/to-:user" component={NewMessagePage} />
        <Route exact path="/g" component={GroupsListPage} />
        <Route exact path="/g/:group" component={GroupPage} />
        <Route exact path="/g/:group/newpost/" component={NewPostPage} />
      </Switch>
    </div>
  );
};
