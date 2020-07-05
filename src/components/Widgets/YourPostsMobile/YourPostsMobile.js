import React, { useContext, useEffect, useState } from "react";
import { UsersState, PostsStateContext } from "../../../contexts/context_index";
import { GeneralLink } from "../../components_index";

export const YourPostsMobile = (props) => {
  const [yourPosts, setYourPosts] = useState(null);
  const { currentUser, isLoggedIn } = useContext(UsersState);
  const { posts } = useContext(PostsStateContext);
  useEffect(() => {
    if (currentUser) {
      const username = currentUser.user_name;
      const postsForWidget = posts.filter((p) => p.author === username);
      setYourPosts(postsForWidget);
    }
  }, [currentUser, posts]);
  return (
    <>
      {isLoggedIn ? (
        <div className="YourPostsMobile-container">
          <div className="YourPostsMobile-content">
            {currentUser && yourPosts ? (
              <>
                <h3 className="component-heading">
                  <GeneralLink
                    url={`/users/${currentUser.user_name}/posts`}
                    text="Your Posts"
                    addClass="PageContentLink"
                  />
                </h3>
                {yourPosts.map((post) => {
                  return (
                    <div className="YourPosts-item" key={`yp-${post.post_id}`}>
                      <GeneralLink
                        url={`/g/${post.group}/posts/${post.post_id}`}
                        text={post.title}
                        addClass="PostLink"
                      />
                      <span className="PostPreview-comments">
                        <GeneralLink
                          url={`/g/${post.group}/posts/${post.post_id}`}
                          text={`${post.comments.length} comments`}
                        />
                      </span>
                    </div>
                  );
                })}
              </>
            ) : (
              <span className="no-content-message">...loading</span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};
