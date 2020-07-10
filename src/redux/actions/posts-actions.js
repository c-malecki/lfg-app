// import {
//   FETCH_POSTS_BEGIN,
//   FETCH_POSTS_SUCCESS,
//   FETCH_POSTS_FAIL,
// } from "../action-types";
// import axios from "axios";

// const fetchPostsBegin = () => ({
//   type: FETCH_POSTS_BEGIN,
// });

// const fetchPostsSuccess = (posts) => ({
//   type: FETCH_POSTS_SUCCESS,
//   payload: posts,
// });

// const fetchPostsFail = (error) => ({
//   type: FETCH_POSTS_FAIL,
//   payload: error,
// });

// export const fetchAllPosts = () => {
//   return (dispatch) => {
//     dispatch(fetchPostsBegin());
//     axios
//       .get(`http://localhost:5000/api/v1/posts`)
//       .then((res) => {
//         dispatch(fetchPostsSuccess(res.data));
//       })
//       .catch((error) => {
//         dispatch(fetchPostsFail(error.message));
//       });
//   };
// };
