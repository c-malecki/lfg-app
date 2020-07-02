import React, { useEffect, useContext, useState } from "react";
import { PostsStateContext, UsersState } from "../../../contexts/context_index";
import { PostPreview, GeneralLink } from "../../components_index";

export const GroupNewPosts = (props) => {
  const [postsInGroup, setPostsInGroup] = useState(null);
  const { posts } = useContext(PostsStateContext);
  const { isLoggedIn } = useContext(UsersState);
  const name = props.groupName;
  useEffect(() => {
    const postsForPage = posts.filter((post) => post.group === name);
    setPostsInGroup(postsForPage);
  }, [name, posts]);
  return (
    <div className="GroupPosts-container">
      <div className="GroupPosts-head">
        <h3 className="component-heading">New {name} Posts</h3>
        {isLoggedIn ? (
          <GeneralLink
            url={`/g/${name}/newpost`}
            text="new post"
            addClass="general-theme-link"
          />
        ) : null}
      </div>
      <GeneralLink
        url={`${name}/posts`}
        text="see all"
        addClass="PageContentLink"
      />
      {postsInGroup ? (
        <>
          {postsInGroup.map((post) => {
            return <PostPreview post={post} key={`post-${post.post_id}`} />;
          })}
        </>
      ) : (
        <span className="no-content-message">...loading</span>
      )}
    </div>
  );
};
