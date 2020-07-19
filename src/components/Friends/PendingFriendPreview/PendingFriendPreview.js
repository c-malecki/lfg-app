import React, { useState } from "react";
import {
  GeneralLink,
  GeneralButton,
  PopUpConfirm,
} from "../../components_index";
import { useSelector } from "react-redux";

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
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  const { user_img, username } = request;
  // Sends POST request to cancel or deny friend request, closes the pop up, and changes UI to reflect request being canceled or denied.
  const handleCancelDeny = () => {
    cancelDenyMethod();
    setShowConfirm(false);
    setRequestStatus({
      removed: true,
      accepted: false,
    });
  };
  // Sends POST request to accept friend request, closes the pop up, and changes UI to reflect friend request being accepted.
  const handleAccept = () => {
    acceptMethod();
    setRequestStatus({
      removed: false,
      accepted: true,
    });
  };
  const showAcceptButton = () => {
    if (sent_from !== currentUsername) {
      return (
        <GeneralButton
          text="accept"
          method={() => handleAccept()}
          addClass={`${isDarkTheme ? "ui-button-dark" : "ui-button-light"}`}
        />
      );
    } else {
      return null;
    }
  };
  const friendPreviewContent = () => {
    if (requestStatus.removed) {
      return (
        <>
          <img src={user_img} alt={username} />
          <GeneralLink
            text={username}
            url={`/users/${username}`}
            addClass="in-text-link"
          />
          <span>Removed</span>
        </>
      );
    } else if (requestStatus.accepted) {
      return (
        <>
          <img src={user_img} alt={username} />
          <GeneralLink
            text={username}
            url={`/users/${username}`}
            addClass="in-text-link"
          />
          <span>Accepted</span>
        </>
      );
    } else {
      return (
        <>
          <img src={user_img} alt={username} />
          <GeneralLink
            text={username}
            url={`/users/${username}`}
            addClass="in-text-link"
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
      <div
        className={`FriendPreview-container ${
          isDarkTheme ? "ui-inner-dark" : "ui-inner-light"
        }`}
      >
        {friendPreviewContent()}
      </div>
    </>
  );
};
