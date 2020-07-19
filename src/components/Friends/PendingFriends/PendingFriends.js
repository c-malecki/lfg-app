import React from "react";
import { PendingFriendPreview } from "../../components_index";
import { utilComponentContent } from "../../../assets/util/utilComponentContent";
import {
  cancelDenyRequest,
  acceptRequest,
} from "../../../assets/util/http_requests/friendsPostRequests";

export const PendingFriends = (props) => {
  const { pending, currentUsername } = props;
  const content = () => {
    return (
      <>
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
              cancelDenyRequest(
                r,
                currentUsername,
                r.sent_to.username === currentUsername
                  ? r.sent_from.username
                  : r.sent_to.username
              )
            }
            acceptMethod={() =>
              acceptRequest(
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
  const noContentMessage = "No pending friend requests.";
  return (
    <div className="PendingFriends-container">
      <h2>Pending Requests</h2>
      {utilComponentContent(pending, content, noContentMessage)}
    </div>
  );
};
