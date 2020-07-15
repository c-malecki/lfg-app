import React from "react";
import { PendingFriendPreview } from "../../components_index";
import Axios from "axios";

export const PendingFriends = (props) => {
  const { pending, currentUsername } = props;
  const cancelDenyMethod = (r, username) => {
    Axios.post(
      `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/pending/cancel/${username}`,
      r
    )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };
  const acceptRequest = (r, username) => {
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
          console.log(one);
          console.log(two);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="PendingFriends-container">
      <h2>Pending Requests</h2>
      {pending.map((r) => (
        <PendingFriendPreview
          request={
            r.sent_to.username === currentUsername ? r.sent_from : r.sent_to
          }
          sent_from={r.sent_from.username}
          buttonText={
            r.sent_to.username === currentUsername ? "deny" : "cancel"
          }
          currentUsername={currentUsername}
          key={`pending-${r.sent_to}-${r.send_from}`}
          cancelDenyMethod={() =>
            cancelDenyMethod(
              r,
              r.sent_to.username === currentUsername
                ? r.sent_from.username
                : r.sent_to.username
            )
          }
          acceptMethod={() =>
            acceptRequest(
              r,
              r.sent_to.username === currentUsername
                ? r.sent_from.username
                : r.sent_to.username
            )
          }
        />
      ))}
    </div>
  );
};
