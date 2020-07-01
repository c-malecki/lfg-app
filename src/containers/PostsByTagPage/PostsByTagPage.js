import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsStateContext } from "../../contexts/context_index";
import { PostPreview } from "../../components/components_index";

export const PostsByTagPage = () => {
  const { posts } = useContext(PostsStateContext);
  const { tag } = useParams();
  return (
    <div className="PostsByTagPage-container">
      <div className="PostsByTagPage-content">
        <h2 className="page-heading">{`#${tag}`}</h2>
        {posts && tag ? (
          posts.map((post) => {
            if (post.tags.includes(tag)) {
              return <PostPreview post={post} key={`post-${post.post_id}`} />;
            } else {
              return null;
            }
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};
