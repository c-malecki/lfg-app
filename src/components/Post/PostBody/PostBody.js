import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  GeneralLink,
  PopUpConfirm,
  GeneralButton,
} from "../../components_index";
import {
  UsersState,
  PostsDispatchContext,
} from "../../../contexts/context_index";

export const PostBody = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { content } = props;
  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);
  const history = useHistory();
  return (
    <div className="PostBody-container">
      <div className="PostBody-head">
        <h3 className="post-title-heading">{content.title}</h3>
        {currentUser !== null &&
        currentUser.account.user_name === content.author ? (
          <span>
            <GeneralButton
              text="X"
              method={() => setShowConfirm(true)}
              addClass="close-delete-button"
            />
          </span>
        ) : null}
      </div>
      {showConfirm ? (
        <PopUpConfirm
          message="Are you sure you want to delete this post?"
          cancel={() => setShowConfirm(false)}
          ok={() => {
            dispatch({
              type: "DELETE_POST",
              post_id: content.post_id,
            });
            history.push("/post-deleted");
          }}
        />
      ) : null}
      <span className="head-text-content">By</span>
      <GeneralLink
        url={`/users/${content.author}`}
        text={content.author}
        addClass="UserLink"
      />
      <span className="head-text-content">at {content.date}</span>
      {content.tags.map((tag) => (
        <GeneralLink
          url={`/posts/tags/${tag}`}
          key={`${content.title}-${tag}`}
          text={`#${tag}`}
          addClass="PostTag-link "
        />
      ))}
      <p>{content.content}</p>
    </div>
  );
};
