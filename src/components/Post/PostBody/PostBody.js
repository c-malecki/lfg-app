import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserLink, PostTagLink } from "../../components_index";
import {
  AppStateContext,
  PostsDispatchContext,
} from "../../../contexts/context_index";

export const PostBody = (props) => {
  const { content } = props;
  const { currentUser } = useContext(AppStateContext);
  const dispatch = useContext(PostsDispatchContext);
  const history = useHistory();
  return (
    <div className="PostBody-container">
      <div className="PostBody-head">
        <h3>{content.title}</h3>
        {currentUser !== null &&
        currentUser.account.user_name === content.author ? (
          <span>
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_POST",
                  post_id: content.post_id,
                });
                history.push("/post-deleted");
              }}
              className="close-delete-button"
            >
              X
            </button>
          </span>
        ) : null}
      </div>
      <span className="head-text-content">By</span>
      <UserLink username={content.author} />
      <span className="head-text-content">at {content.date}</span>
      {content.tags.map((tag) => (
        <PostTagLink tag={tag} text={tag} key={`${content.title}-${tag}`} />
      ))}
      <p>{content.content}</p>
    </div>
  );
};
