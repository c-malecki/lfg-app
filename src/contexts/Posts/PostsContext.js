import React, { createContext, useReducer } from "react";
import { samplePosts, sampleTags } from "../dumbydata/sample_posts";

export const PostsStateContext = createContext();
export const PostsDispatchContext = createContext();

const initialState = {
  posts: samplePosts,
  tags: sampleTags,
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      const { posts } = state;
      const idx = state.posts.findIndex(
        (post) => post.post_id === action.post_id
      );
      const newPosts = [...posts];
      const { comments } = newPosts[idx];
      newPosts[idx] = {
        ...newPosts[idx],
        comments: [...comments, { ...action.comment }],
      };
      return {
        ...state,
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
        ...state,
        posts: [...newPosts],
      };
    }
    case "CREATE_POST": {
      const { posts, tags } = state;
      // new tags created by post need to be added to tags array in state
      const newTags = [...tags];
      const filterExistingTags = newTags.filter(
        (t) => !action.post.tags.includes(t)
      );
      const newPost = action.post;
      return {
        posts: [...posts, newPost],
        tags: [...filterExistingTags, ...action.post.tags],
      };
    }
    case "DELETE_POST": {
      const { posts } = state;
      const newPosts = [...posts];
      const filteredPosts = newPosts.filter(
        (post) => post.post_id !== action.post_id
      );
      return {
        ...state,
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
