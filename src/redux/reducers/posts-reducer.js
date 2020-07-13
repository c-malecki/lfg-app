// import {
//   FETCH_POSTS_BEGIN,
//   FETCH_POSTS_SUCCESS,
//   FETCH_POSTS_FAIL,
// } from "../action-types";

// const initialState = {
//   posts: null,
//   isLoading: false,
//   error: null,
// };

// export const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_POSTS_BEGIN: {
//       return {
//         ...state,
//         isLoading: true,
//         error: null,
//       };
//     }
//     case FETCH_POSTS_SUCCESS: {
//       return {
//         posts: action.payload,
//         isLoading: false,
//         error: null,
//       };
//     }
//     case FETCH_POSTS_FAIL: {
//       const { error } = action.payload;
//       return {
//         ...state,
//         isLoading: false,
//         error: error,
//       };
//     }
//     default:
//       return state;
//   }
// };