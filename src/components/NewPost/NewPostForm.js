import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UsersState, PostsStateContext } from "../../contexts/context_index";
import { PostsDispatchContext } from "../../contexts/context_index";
import { reformatDate } from "../../assets/util/reformatDate";
import { GeneralButton, GeneralLink } from "../components_index";

export const NewPostForm = (props) => {
  const { tags } = useContext(PostsStateContext);
  const [formState, setFormState] = useState({
    message: "",
    title: "",
    tags: [],
    tag_search: "",
    filtered_tags: tags,
    all_tags: tags,
    error: null,
  });

  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);
  const history = useHistory();
  const { group } = useParams();

  const addTag = (tag) => {
    const { tags } = formState;
    // debugger;
    // const check = tags.forEach((t) => {
    //   if (t === tag) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }

    setFormState((prevState) => ({
      ...prevState,
      tags: [...formState.tags, tag],
    }));
  };

  const removeTag = (rTag) => {
    const { tags } = formState;
    const removeTags = tags.filter((tag) => tag !== rTag);
    setFormState((prevState) => ({
      ...prevState,
      tags: [...removeTags],
    }));
  };

  const resetForm = () => {
    setFormState((prevState) => ({
      ...prevState,
      message: "",
      title: "",
      tags: [],
      tag_search: "",
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
      tags: formState.tags,
      group: group,
      post_id: uuidv4(),
      comments: [],
    };
    dispatch({ type: "CREATE_POST", post: data });
    resetForm();
    history.push(`/g/${group}/posts/${data.post_id}`);
  };

  return (
    <div className="PostForm-container">
      <h2>
        New Post in <GeneralLink url={`/g/${group}`} text={`g/${group}`} />
      </h2>
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
        </div>
        <div className="PostForm-tags-container">
          <input
            type="text"
            onChange={(e) =>
              setFormState({
                ...formState,
                tag_search: e.target.value,
                filtered_tags: formState.all_tags.filter((tag) => {
                  return tag
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                }),
              })
            }
            name="search-tags"
            placeholder="Search for or add tags..."
            value={formState.tag_search}
          />
          <ul className="PostForm-filtered-tags">
            <li onClick={() => addTag(formState.tag_search)}>
              {formState.tag_search}
            </li>
            {formState.filtered_tags.map((tag) => {
              return <li key={tag} onClick={() => addTag(tag)}>{`#${tag}`}</li>;
            })}
          </ul>
          <ul className="PostForm-selected-tags">
            {formState.tags.map((tag) => {
              return (
                <li key={`selected-${tag}`}>
                  {`#${tag}`}{" "}
                  <button onClick={() => removeTag(tag)} type="button">
                    X
                  </button>
                </li>
              );
            })}
          </ul>
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
