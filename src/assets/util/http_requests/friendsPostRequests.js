import Axios from "axios";

export const removeFriend = (r, currentUsername, username) => {
  Axios.post(
    `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/accepted/remove/${username}`,
    r
  )
    .then((res) => console.log("Friend removed."))
    .catch((error) => console.log(error.message));
};

export const cancelDenyRequest = (r, currentUsername, username) => {
  Axios.post(
    `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/pending/cancel/${username}`,
    r
  )
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error.message));
};

export const acceptRequest = (r, currentUsername, username) => {
  Axios.all([
    Axios.post(
      `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/pending/cancel/${username}`,
      r
    ),
    Axios.post(
      `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/pending/accept/${username}`,
      r
    ),
  ])
    .then(
      Axios.spread((one, two) => {
        console.log("Friend accepted.");
      })
    )
    .catch((error) => {
      console.log(error);
    });
};
