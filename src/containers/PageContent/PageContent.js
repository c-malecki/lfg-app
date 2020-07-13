import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  UserProfilePage,
  LogInPage,
  PostsByTagPage,
  PostPage,
  PostDeletedPage,
  MessagesPage,
  ViewMessagePage,
  GroupPage,
  GroupsListPage,
  GroupPostsPage,
  FriendsPage,
  PostsByUserPage,
  RecentPostsPage,
  UserJoinedGroupsPage,
  GroupMembersPage,
  NewPostPage,
  NewMessagePage,
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
  LogInRoute,
} from "../../components/components_index";
import { useSelector } from "react-redux";

export const PageContent = (props) => {
  const { isLoggedIn, currentUser } = useSelector((state) => state.userReducer);
  const { openYourPosts, openYourGroups, openCurrentUser } = useSelector(
    (state) => state.appReducer
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
            <Route exact path="/g" component={GroupsListPage} />
            <Route exact path="/g/:group" component={GroupPage} />
            <Route exact path="/g/:group/newpost/" component={NewPostPage} />
            <Route exact path="/g/:group/posts" component={GroupPostsPage} />
            <Route exact path="/g/:group/posts/:id" component={PostPage} />
            <Route
              exact
              path="/g/:group/members"
              component={GroupMembersPage}
            />

            <Route exact path="/posts" component={RecentPostsPage} />
            <Route exact path="/posts/tags/:tag" component={PostsByTagPage} />

            <Route exact path="/post-deleted" component={PostDeletedPage} />
            <LogInRoute exact path="/login" component={LogInPage} />
            <Route exact path="/messages" component={MessagesPage} />
            <Route
              exact
              path="/messages/message/:id"
              component={ViewMessagePage}
            />
            <Route exact path="/messages/new" component={NewMessagePage} />

            <Route exact path="/friends" component={FriendsPage} />
            <Route exact path="/users/:user" component={UserProfilePage} />
            <Route
              exact
              path="/users/:user/posts"
              component={PostsByUserPage}
            />
            <Route
              exact
              path="/users/:user/groups"
              component={UserJoinedGroupsPage}
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
