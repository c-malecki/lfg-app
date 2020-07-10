// import {
//   FETCH_GROUPS_BEGIN,
//   FETCH_GROUPS_SUCCESS,
//   FETCH_GROUPS_FAIL,
// } from "../action-types";

// const initialState = {
//   groups: null,
//   isLoading: false,
//   error: null,
// };

// export const groupsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_GROUPS_BEGIN: {
//       return {
//         ...state,
//         isLoading: true,
//         error: null,
//       };
//     }
//     case FETCH_GROUPS_SUCCESS: {
//       return {
//         groups: action.payload,
//         isLoading: false,
//         error: null,
//       };
//     }
//     case FETCH_GROUPS_FAIL: {
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
