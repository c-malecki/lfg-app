// import {
//   FETCH_GROUPS_BEGIN,
//   FETCH_GROUPS_SUCCESS,
//   FETCH_GROUPS_FAIL,
// } from "../action-types";
// import axios from "axios";

// const fetchGroupsBegin = () => ({
//   type: FETCH_GROUPS_BEGIN,
// });

// const fetchGroupsSuccess = (groups) => ({
//   type: FETCH_GROUPS_SUCCESS,
//   payload: groups,
// });

// const fetchGroupsFail = (error) => ({
//   type: FETCH_GROUPS_FAIL,
//   payload: error,
// });

// export const fetchAllGroups = () => {
//   return (dispatch) => {
//     dispatch(fetchGroupsBegin());
//     axios
//       .get(`http://localhost:5000/api/v1/groups`)
//       .then((res) => {
//         dispatch(fetchGroupsSuccess(res.data));
//       })
//       .catch((error) => {
//         dispatch(fetchGroupsFail(error.message));
//       });
//   };
// };