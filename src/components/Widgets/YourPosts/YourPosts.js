import React from "react";
import { GeneralLink, WidgetLoader } from "../../components_index";
import { useSelector } from "react-redux";

export const YourPosts = (props) => {
  const { currentUser, isLoggedIn, isLoading, widgets } = useSelector(
    (state) => state.userReducer
  );
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const widgetContent = () => {
    if (widgets.isLoading) {
      return <WidgetLoader />;
    } else if (widgets.error) {
      return <div>Something went wrong.</div>;
    } else if (!widgets.isLoading) {
      const { posts } = widgets;
      const { username } = currentUser;
      return (
        <>
          <GeneralLink
            url={`/users/${username}/posts`}
            text="Your Posts"
            addClass="widget-header"
          />
          {posts
            ? posts.map((p) => {
                return (
                  <div className="YourPosts-item" key={`yp-${p.post_id}`}>
                    <GeneralLink
                      url={`/g/${p.posted_in}/posts/${p.post_id}`}
                      text={p.post_title}
                      addClass="large-link"
                    />
                    <span className="PostPreview-comments">
                      <GeneralLink
                        url={`/g/${p.posted_in}/posts/${p.post_id}`}
                        text={`${p.comments.length} comments`}
                        addClass={`${
                          isDarkTheme
                            ? "comments-tags-dark"
                            : "comments-tags-light"
                        }`}
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
    <>
      {!isLoading && currentUser && isLoggedIn ? (
        <div
          className={`YourPosts-container ${
            isDarkTheme ? "ui-content-dark" : "ui-content-light"
          }`}
        >
          {widgetContent()}
        </div>
      ) : null}
    </>
  );
};
