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
  GroupPostsPage,
  FriendsPage,
  PostsByUserPage,
  RecentPostsPage,
} from "../containers_index";
import {
  JoinedGroups,
  PageNav,
  CurrentUser,
  YourPosts,
} from "../../components/components_index";

export const PageContent = (props) => {
  return (
    <div className="Page-container">
      <div className="Page-content">
        <PageNav />
        <div className="Page-content-col1">
          <Route path="/" component={CurrentUser} />
        </div>
        <div className="Page-content-col2">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/g/:group/posts" component={GroupPostsPage} />
            <Route exact path="/g/:group/posts/:id" component={PostPage} />
            <Route exact path="/posts" component={RecentPostsPage} />
            <Route exact path="/posts/tags/:tag" component={PostsByTagPage} />
            <Route exact path="/users/:user" component={UserProfilePage} />
            <Route exact path="/post-deleted" component={PostDeletedPage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/messages" component={MessagesPage} />
            <Route exact path="/messages/:id" component={ViewMessagePage} />
            <Route
              exact
              path="/messages/new/to-:user"
              component={NewMessagePage}
            />
            <Route exact path="/g" component={GroupsListPage} />
            <Route exact path="/g/:group" component={GroupPage} />
            <Route exact path="/g/:group/newpost/" component={NewPostPage} />
            <Route exact path="/friends" component={FriendsPage} />
            <Route
              exact
              path="/users/:user/posts"
              component={PostsByUserPage}
            />
          </Switch>
        </div>
        <div className="Page-content-col3">
          <Route path="/" component={JoinedGroups} />
          <Route path="/" component={YourPosts} />
        </div>
      </div>
    </div>
  );
};
