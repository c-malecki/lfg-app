import React from "react";
import { AcceptedFriendPreview } from "../../components_index";
import { utilComponentContent } from "../../../assets/util/utilComponentContent";
import { removeFriend } from "../../../assets/util/http_requests/friendsPostRequests";

export const AcceptedFriends = (props) => {
  const { accepted, currentUsername } = props;
  const content = () => {
    return (
      <>
        {accepted.map((r) => (
          <AcceptedFriendPreview
            request={
              r.sent_to.username === currentUsername ? r.sent_from : r.sent_to
            }
            key={`accepted-${r.sent_to}-${r.send_from}`}
            removeMethod={() =>
              removeFriend(
                r,
                currentUsername,
                r.sent_to.username === currentUsername
                  ? r.sent_from.username
                  : r.sent_to.username
              )
            }
          />
        ))}
      </>
    );
  };
  const noContentMessage = "Currently no mutual friends.";
  return (
    <div className="AcceptedFriends-container">
      <div className="PendingFriends-container">
        <h2>Friends</h2>
        {utilComponentContent(accepted, content, noContentMessage)}
      </div>
    </div>
  );
};
