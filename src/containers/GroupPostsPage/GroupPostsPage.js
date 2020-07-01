import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsStateContext, UsersState } from "../../contexts/context_index";
import { PostPreview, GeneralLink } from "../../components/components_index";

export const GroupPostsPage = (props) => {
  const [postsInGroup, setPostsInGroup] = useState(null);
  const { posts } = useContext(PostsStateContext);
  const { isLoggedIn } = useContext(UsersState);
  const { group } = useParams();
  useEffect(() => {
    const postsForPage = posts.filter((post) => post.group === group);
    setPostsInGroup(postsForPage);
  }, [group, posts]);
  return (
    <div className="GroupPostsPage-container">
      <div className="GroupPostsPage-content">
        <div className="GroupPostsPage-head">
          {/* <h3 className="component-heading">{group} Posts</h3> */}
          <GeneralLink
            url={`/g/${group}`}
            text={`${group}`}
            addClass="PageContentLink"
          />
          {isLoggedIn ? (
            <GeneralLink
              url={`/g/${group}/newpost`}
              text="new post"
              addClass="general-theme-link"
            />
          ) : null}
        </div>
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
    </div>
  );
};
