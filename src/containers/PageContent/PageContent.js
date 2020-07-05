import React, { useContext } from "react";
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
  YourGroups,
  PageNav,
  CurrentUser,
  YourPosts,
  MobilePageNav,
  MobileArrowButton1,
  MobileArrowButton2,
  MobileUserActions,
  YourGroupsMobile,
  YourPostsMobile,
  CurrentUserMobile,
} from "../../components/components_index";
import { UsersState, AppState } from "../../contexts/context_index";

export const PageContent = (props) => {
  const { isLoggedIn, currentUser } = useContext(UsersState);
  const { openYourPosts, openYourGroups, openCurrentUser } = useContext(
    AppState
  );
  return (
    <div className="Page-container">
      <div className="Page-content">
        <PageNav />
        <MobilePageNav />
        <MobileArrowButton1 />
        <MobileUserActions />
        {isLoggedIn && currentUser ? <MobileArrowButton2 /> : null}
        {openYourPosts ? <YourPostsMobile /> : null}
        {openYourGroups ? <YourGroupsMobile /> : null}
        {openCurrentUser ? <CurrentUserMobile /> : null}
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
          <Route path="/" component={YourGroups} />
          <Route path="/" component={YourPosts} />
        </div>
      </div>
    </div>
  );
};
