import React, { useContext, useState } from "react";
import { GeneralLink, GeneralButton, PopUpConfirm } from "../components_index";
import { UsersDispatch } from "../../contexts/context_index";

export const FriendsUserPreview = (props) => {
  const [showConfirm, setShowConfirm] = useState({
    show: false,
    dispatch: null,
    accepter: null,
    sender: null,
    message: "",
  });
  const { friend, currentUser } = props;
  const dispatch = useContext(UsersDispatch);

  const handleClosePopup = () => {
    setShowConfirm({
      show: false,
      dispatch: null,
      accepter: null,
      sender: null,
      message: "",
    });
  };
  return (
    <div className="UserPreview-container">
      {showConfirm.show ? (
        <PopUpConfirm
          message={showConfirm.message}
          cancel={() => handleClosePopup()}
          ok={() => {
            dispatch({
              type: showConfirm.dispatch,
              accepter: showConfirm.accepter,
              sender: showConfirm.sender,
            });
            handleClosePopup();
          }}
        />
      ) : null}

      <img src={friend.profile_pic} alt={friend.user_name} />
      <div className="UserPreview-content">
        <div className="UserPreview-user-info">
          <GeneralLink
            url={`/users/${friend.user_name}`}
            text={friend.user_name}
            addClass="UserLink"
          />
          <span>Friends since: {friend.date_accepted}</span>
        </div>
        <div className="UserPreview-buttons">
          {friend.pending && friend.sender ? (
            <GeneralButton
              text="cancel"
              addClass="close-delete-button"
              method={() =>
                setShowConfirm({
                  show: true,
                  dispatch: "CANCEL_DENY_REMOVE_FRIEND",
                  accepter: currentUser,
                  sender: friend.user_name,
                  message: `Are you sure you want to cancel your friend request to ${friend.user_name}?`,
                })
              }
            />
          ) : null}
          {friend.pending && friend.sender === false ? (
            <>
              <GeneralButton
                text="accept"
                addClass="general-theme-button"
                method={() =>
                  dispatch({
                    type: "ACCEPT_FRIEND_REQUEST",
                    accepter: currentUser,
                    sender: friend.user_name,
                  })
                }
              />
              <GeneralButton
                text="deny"
                addClass="close-delete-button"
                method={() =>
                  setShowConfirm({
                    show: true,
                    dispatch: "CANCEL_DENY_REMOVE_FRIEND",
                    accepter: currentUser,
                    sender: friend.user_name,
                    message: `Are you sure you want to deny friend request from ${friend.user_name}?`,
                  })
                }
              />
            </>
          ) : null}
          {friend.pending === false ? (
            <GeneralButton
              text="remove"
              addClass="close-delete-button"
              method={() =>
                setShowConfirm({
                  show: true,
                  dispatch: "CANCEL_DENY_REMOVE_FRIEND",
                  accepter: currentUser,
                  sender: friend.user_name,
                  message: `Are you sure you want to remove from ${friend.user_name} your friends?`,
                })
              }
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
