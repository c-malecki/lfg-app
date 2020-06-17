import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const PostsStateContext = createContext();
export const PostsDispatchContext = createContext();

const initialState = {
  posts: null,
};

// ???
// const rootReducer = (state, action) => ({
//   comments: commentsReducer(state.comments, action),
//   posts: postsReducer(state.posts, action),
// })

const postsReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return { posts: action.posts };
    }
    case "ADD_COMMENT": {
      const { posts } = state;
      const idx = state.posts.findIndex(
        (post) => post.post_id === action.post_id
      );
      const newPosts = [...posts];
      const { comments } = newPosts[idx];
      const commentId =
        comments.length > 0
          ? parseInt(comments[comments.length - 1].comment_id) + 1
          : "1";
      newPosts[idx] = {
        ...newPosts[idx],
        comments: [
          ...comments,
          { ...action.comment, comment_id: commentId.toString() },
        ],
      };
      return {
        posts: [...newPosts],
      };
    }
    case "ADD_POST": {
      const { posts } = state;
      const newPost = action.post;
      return { posts: [...posts, newPost] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/posts")
      .then((res) => {
        dispatch({ type: "GET_POSTS", posts: res.data });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
};
