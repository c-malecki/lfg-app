import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppStateContext } from "../../contexts/context_index";
import {
  PostsDispatchContext,
  PostsStateContext,
} from "../../contexts/context_index";
import { reformatDate } from "../../assets/util/reformatDate";
import { GeneralButton } from "../components_index";

export const NewPostForm = (props) => {
  const [formState, setFormState] = useState({
    message: "",
    title: "",
    tags: [],
  });

  const { currentUser } = useContext(AppStateContext);
  const { posts } = useContext(PostsStateContext);
  const dispatch = useContext(PostsDispatchContext);
  const history = useHistory();

  const resetForm = () => {
    setFormState((prevState) => ({
      ...prevState,
      message: "",
      title: "",
      tags: [],
    }));
  };

  const handleSubmit = async (e) => {
    const date = reformatDate(new Date());
    const genPostId =
      posts.length > 0 ? parseInt(posts[posts.length - 1].post_id) + 1 : "1";
    const postId = genPostId.toString();
    e.preventDefault();
    const data = {
      author: currentUser.account.user_name,
      date: date,
      title: formState.title,
      content: formState.message,
      tags: ["test"],
      post_id: postId,
      comments: [],
    };
    await dispatch({ type: "ADD_POST", post: data });
    resetForm();
    history.push(`/posts/${data.post_id}`);
  };

  return (
    <div className="PostForm-container">
      <div className="PostForm-container">
        <form className="PostForm-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="PostForm-comment-container">
            <input
              type="text"
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
              name="title"
              placeholder="Title the post..."
              value={formState.title}
            />
            <textarea
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              name="message"
              className="PostForm-comment-input"
              type="text"
              placeholder="Write a post..."
              value={formState.message}
            />
          </div>
          <div className="PostForm-submit-container">
            <GeneralButton
              type="submit"
              addClass="general-theme-button"
              text="post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
