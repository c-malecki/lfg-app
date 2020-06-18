import React, { createContext, useReducer } from "react";
import { samplePosts } from "../dumbydata/sample_posts";
// import axios from "axios";

export const PostsStateContext = createContext();
export const PostsDispatchContext = createContext();

const initialState = {
  posts: samplePosts,
};

const postsReducer = (state, action) => {
  switch (action.type) {
    // case "GET_POSTS": {
    //   return { posts: action.posts };
    // }
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
    case "DELETE_COMMENT": {
      const { posts } = state;
      const idx = state.posts.findIndex(
        (post) => post.post_id === action.post_id
      );
      const newPosts = [...posts];
      const { comments } = newPosts[idx];
      const newComments = comments.filter(
        (comment) => comment.comment_id !== action.comment_id
      );
      newPosts[idx] = {
        ...newPosts[idx],
        comments: [...newComments],
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
    case "DELETE_POST": {
      const { posts } = state;
      const newPosts = [...posts];
      const filteredPosts = newPosts.filter(
        (post) => post.post_id !== action.post_id
      );
      return {
        posts: [...filteredPosts],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/posts")
  //     .then((res) => {
  //       dispatch({ type: "GET_POSTS", posts: res.data });
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
};

// ???
// const rootReducer = (state, action) => ({
//   comments: commentsReducer(state.comments, action),
//   posts: postsReducer(state.posts, action),
// })
