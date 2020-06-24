import React, { useContext } from "react";
import { PostsStateContext, UsersState } from "../../contexts/context_index";
import { PostPreview, ButtonLink } from "../components_index";

export const RecentPosts = (props) => {
  const { posts } = useContext(PostsStateContext);
  const { isLoggedIn } = useContext(UsersState);
  return (
    <div className="RecentPosts-container">
      <h2>Recent Posts</h2>
      {posts ? (
        posts.map((post) => {
          return <PostPreview post={post} key={`post-${post.post_id}`} />;
        })
      ) : (
        <div>loading</div>
      )}
      {isLoggedIn ? (
        <div>
          <ButtonLink
            url="/newpost"
            text="new post"
            addClass="page-buttonlink"
          />
        </div>
      ) : null}
    </div>
  );
};
