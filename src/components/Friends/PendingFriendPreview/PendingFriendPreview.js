import React, { useState } from "react";
import {
  GeneralLink,
  GeneralButton,
  PopUpConfirm,
} from "../../components_index";

export const PendingFriendPreview = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    removed: false,
    accepted: false,
  });
  const {
    request,
    buttonText,
    cancelDenyMethod,
    acceptMethod,
    currentUsername,
    sent_from,
  } = props;
  const { user_img, username } = request;
  const handleCancelDeny = () => {
    cancelDenyMethod();
    setShowConfirm(false);
    setRequestStatus({
      removed: true,
      accepted: false,
    });
  };
  const handleAccept = () => {
    acceptMethod();
    setRequestStatus({
      removed: false,
      accepted: true,
    });
  };
  const showAcceptButton = () => {
    console.log(request);
    if (sent_from !== currentUsername) {
      return (
        <GeneralButton
          text="accept"
          method={() => handleAccept()}
          addClass="general-theme-button"
        />
      );
    } else {
      return null;
    }
  };
  const friendPreviewContent = () => {
    if (requestStatus.removed) {
      return <div>Removed</div>;
    } else if (requestStatus.accepted) {
      return <div>Accepted</div>;
    } else {
      return (
        <>
          <img src={user_img} alt={username} />
          <GeneralLink
            text={username}
            url={`/users/${username}`}
            addClass="UserLink"
          />
          <GeneralButton
            text={buttonText}
            method={() => setShowConfirm(true)}
            addClass="close-delete-button"
          />
          {showAcceptButton()}
        </>
      );
    }
  };
  return (
    <>
      {showConfirm ? (
        <PopUpConfirm
          message={`Are you sure you want to ${buttonText} this friend request?`}
          cancel={() => setShowConfirm(false)}
          ok={handleCancelDeny}
        />
      ) : null}
      <div className="FriendPreview-container">{friendPreviewContent()}</div>
    </>
  );
};
