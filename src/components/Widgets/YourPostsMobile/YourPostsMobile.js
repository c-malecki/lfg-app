import React from "react";
import { GeneralLink } from "../../components_index";
import { useSelector } from "react-redux";

export const YourPostsMobile = (props) => {
  const { currentUser, isLoggedIn, isLoading, widgets } = useSelector(
    (state) => state.userReducer
  );
  const yourPostsContent = () => {
    if (!isLoggedIn && !currentUser && isLoading) {
      return null;
    } else if (!isLoading && currentUser) {
      const widgetContent = () => {
        if (widgets.isLoading) {
          return <div>loading...</div>;
        } else if (widgets.error) {
          return <div>Something went wrong.</div>;
        } else if (!widgets.isLoading) {
          const { posts } = widgets;
          const { username } = currentUser;
          return (
            <>
              <h3 className="component-heading">
                <GeneralLink
                  url={`/users/${username}/posts`}
                  text="Your Posts"
                  addClass="PageContentLink"
                />
              </h3>
              {posts
                ? posts.map((p) => {
                    return (
                      <div className="YourPosts-item" key={`yp-${p.post_id}`}>
                        <GeneralLink
                          url={`/g/${p.posted_in}/posts/${p.post_id}`}
                          text={p.post_title}
                          addClass="PostLink"
                        />
                        <span className="PostPreview-comments">
                          <GeneralLink
                            url={`/g/${p.posted_in}/posts/${p.post_id}`}
                            text={`${p.comments.length} comments`}
                          />
                        </span>
                      </div>
                    );
                  })
                : null}
            </>
          );
        }
      };
      return (
        <div className="YourPostsMobile-container">
          <div className="YourPostsMobile-content">{widgetContent()}</div>
        </div>
      );
    }
  };
  return <>{yourPostsContent()}</>;
};
