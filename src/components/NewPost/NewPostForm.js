import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UsersState } from "../../contexts/context_index";
import { PostsDispatchContext } from "../../contexts/context_index";
import { reformatDate } from "../../assets/util/reformatDate";
import { GeneralButton } from "../components_index";

export const NewPostForm = (props) => {
  const [formState, setFormState] = useState({
    message: "",
    title: "",
    tags: [],
  });

  const { currentUser } = useContext(UsersState);
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

  const handleSubmit = (e) => {
    const date = reformatDate(new Date());
    e.preventDefault();
    const data = {
      author: currentUser.account.user_name,
      date: date,
      title: formState.title,
      content: formState.message,
      tags: ["test"],
      post_id: uuidv4(),
      comments: [],
    };
    dispatch({ type: "ADD_POST", post: data });
    resetForm();
    history.push(`/posts/${data.post_id}`);
  };

  return (
    <div className="PostForm-container">
      <h2>New Post</h2>
      <form className="PostForm-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="PostForm-title-container">
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
            name="title"
            placeholder="Title the post..."
            value={formState.title}
          />
          {/* tags input */}
        </div>
        <div className="PostForm-content-container">
          <textarea
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            name="message"
            className="PostForm-content-input"
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
  );
};
