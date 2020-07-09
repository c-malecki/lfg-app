import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";

// redux
import { useSelector } from "react-redux";

export const UserRecentPosts = (props) => {
  const user = props.username;
  const loading = useSelector((state) => state.postsReducer.loading);
  const error = useSelector((state) => state.postsReducer.error);
  const userPosts = useSelector((state) =>
    state.postsReducer.posts.filter((p) => p.post_author === user)
  );
  const userRecentPostsContent = () => {
    if (loading) {
      return <div>loading...</div>;
    } else if (!loading && error) {
      return <div>something went wrong</div>;
    } else {
      return (
        <>
          {userPosts.map((p) => {
            return <div key={p.post_id}>{p.post_title}</div>;
          })}
        </>
      );
    }
  };
  return (
    <div className="UserRecentPosts-container">
      <h3 className="page-heading">{user}'s Recent Posts</h3>
      <GeneralLink
        url={`${user}/posts`}
        text="see all"
        addClass="PageContentLink"
      />
      {userRecentPostsContent()}
    </div>
  );
};
