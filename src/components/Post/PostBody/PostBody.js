import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserLink } from "../../components_index";
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
      <h3>{content.title}</h3>
      {currentUser !== null &&
      currentUser.account.user_name === content.author ? (
        <button
          onClick={async () => {
            await dispatch({
              type: "DELETE_POST",
              post_id: content.post_id,
            });
            history.push("/post-deleted");
          }}
        >
          X
        </button>
      ) : (
        ""
      )}
      <span className="head-text-content">By</span>
      <UserLink username={content.author} />
      <span className="head-text-content">at {content.date}</span>
      <p>{content.content}</p>
    </div>
  );
};
