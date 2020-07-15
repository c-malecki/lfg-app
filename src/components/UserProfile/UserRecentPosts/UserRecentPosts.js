import React from "react";
import { PostPreview, GeneralLink } from "../../components_index";

export const UserRecentPosts = (props) => {
  const { userForPageUsername, userForPagePosts } = props;
  return (
    <div className="UserRecentPosts-container">
      <h3 className="page-heading">{userForPageUsername}'s Recent Posts</h3>
      <GeneralLink
        url={`${userForPageUsername}/posts`}
        text="see all"
        addClass="PageContentLink"
      />
      {userForPagePosts.map((p) => {
        return <PostPreview post={p} key={p.post_id} />;
      })}
    </div>
  );
};
