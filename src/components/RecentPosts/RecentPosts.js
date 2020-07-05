import React, { useContext, useEffect, useState } from "react";
import { PostsStateContext, UsersState } from "../../contexts/context_index";
import { PostPreview, GeneralButton } from "../components_index";

export const RecentPosts = (props) => {
  const [pagePosts, setPagePosts] = useState({
    groupPosts: null,
    viewAll: true,
  });
  const { posts } = useContext(PostsStateContext);
  const { currentUser, isLoggedIn } = useContext(UsersState);
  useEffect(() => {
    if (currentUser && isLoggedIn) {
      const groupPosts = posts.filter(
        (p) => currentUser.groups.indexOf(p.group) > -1
      );
      setPagePosts((prevState) => ({
        ...prevState,
        groupPosts,
      }));
    }
  }, [currentUser, isLoggedIn, posts]);
  const handleToggleAll = () => {
    setPagePosts((prevState) => ({ ...prevState, viewAll: true }));
  };
  const handleToggleGroups = () => {
    setPagePosts((prevState) => ({ ...prevState, viewAll: false }));
  };
  return (
    <div className="RecentPosts-container">
      <h2 className="page-heading">Recent Posts</h2>
      {isLoggedIn && posts ? (
        <>
          <div className="RecentPosts-actions">
            <GeneralButton
              text="all"
              addClass="general-theme-button"
              method={() => handleToggleAll()}
            />
            <GeneralButton
              text="groups"
              addClass="general-theme-button"
              method={() => handleToggleGroups()}
            />
            <span className="search-placeholder">search placeholder</span>
          </div>

          {pagePosts.viewAll && posts ? (
            <>
              {posts.map((post) => {
                return <PostPreview post={post} key={`post-${post.post_id}`} />;
              })}
            </>
          ) : (
            <>
              {pagePosts.groupPosts.map((post) => {
                return <PostPreview post={post} key={`post-${post.post_id}`} />;
              })}
            </>
          )}
        </>
      ) : (
        <>
          <span className="search-placeholder">search placeholder</span>
          {posts.map((post) => {
            return <PostPreview post={post} key={`post-${post.post_id}`} />;
          })}
        </>
      )}
    </div>
  );
};
