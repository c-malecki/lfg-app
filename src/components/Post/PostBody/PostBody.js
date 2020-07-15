import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  GeneralLink,
  PopUpConfirm,
  GeneralButton,
} from "../../components_index";
import Axios from "axios";

export const PostBody = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { content, currentUser, post_id } = props;

  const history = useHistory();
  const showPostDeleteButton = () => {
    if (currentUser && currentUser.username === content.post_author) {
      return (
        <span>
          <GeneralButton
            text="X"
            method={() => setShowConfirm(true)}
            addClass="form-delete-button"
          />
        </span>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="PostBody-container">
      <div className="PostBody-head">
        <h3 className="post-title-heading">{content.post_title}</h3>
        {showPostDeleteButton()}
      </div>
      {showConfirm ? (
        <PopUpConfirm
          message="Are you sure you want to delete this post?"
          cancel={() => setShowConfirm(false)}
          ok={async () => {
            await Axios.post(
              `http://localhost:5000/api/v1/posts/ids/${post_id}/delete`
            )
              .then((res) => console.log(res.status))
              .catch((error) => console.log(error.message));
            history.push("/post-deleted");
          }}
        />
      ) : null}
      <span className="head-text-content">By</span>
      <GeneralLink
        url={`/users/${content.post_author}`}
        text={content.post_author}
        addClass="UserLink"
      />
      <span className="head-text-content">at {content.date_posted}</span>
      {content.post_tags.map((tag) => (
        <GeneralLink
          url={`/posts/tags/${tag}`}
          key={`${content.title}-${tag}`}
          text={`#${tag}`}
          addClass="PostTag-link "
        />
      ))}
      <p>{content.post_content}</p>
    </div>
  );
};
