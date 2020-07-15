import React from "react";
import { AcceptedFriendPreview } from "../../components_index";
import Axios from "axios";

export const AcceptedFriends = (props) => {
  const { accepted, currentUsername } = props;
  const removeFriend = (r, username) => {
    Axios.post(
      `${process.env.REACT_APP_API_URL}/users/${currentUsername}/friends/accepted/remove/${username}`,
      r
    )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="AcceptedFriends-container">
      <div className="PendingFriends-container">
        <h2>Friends</h2>
        {accepted.map((r) => (
          <AcceptedFriendPreview
            request={
              r.sent_to.username === currentUsername ? r.sent_from : r.sent_to
            }
            key={`accepted-${r.sent_to}-${r.send_from}`}
            removeMethod={() =>
              removeFriend(
                r,
                r.sent_to.username === currentUsername
                  ? r.sent_from.username
                  : r.sent_to.username
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
