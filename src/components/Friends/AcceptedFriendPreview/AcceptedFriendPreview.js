import React, { useState } from "react";
import {
  GeneralLink,
  GeneralButton,
  PopUpConfirm,
} from "../../components_index";
import { useSelector } from "react-redux";

export const AcceptedFriendPreview = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  const { request, removeMethod } = props;
  const { user_img, username } = request;
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  // Sends POST request to remove friend, closes the pop up, and changes UI to reflect user being removed.
  const handleRemove = () => {
    removeMethod();
    setShowConfirm(false);
    setRequestStatus(true);
  };
  const friendPreviewContent = () => {
    if (requestStatus) {
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
            text="remove"
            method={() => setShowConfirm(true)}
            addClass="close-delete-button"
          />
        </>
      );
    }
  };
  return (
    <div
      className={`FriendPreview-container ${
        isDarkTheme ? "ui-content-dark" : "ui-content-light"
      }`}
    >
      {showConfirm ? (
        <PopUpConfirm
          message={`Are you sure you want to remove ${username} from your friends?`}
          cancel={() => setShowConfirm(false)}
          ok={handleRemove}
        />
      ) : null}
      {friendPreviewContent()}
    </div>
  );
};
