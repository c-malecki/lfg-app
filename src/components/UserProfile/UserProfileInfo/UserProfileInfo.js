import React, { useState, useEffect } from "react";
import { GeneralLink, GeneralButton } from "../../components_index";
import { useSelector } from "react-redux";
import Axios from "axios";

export const UserProfileInfo = (props) => {
  const [friendButton, setFriendButton] = useState({
    text: "Add Friend",
    disabled: false,
  });
  const {
    userForPageUsername,
    date_joined,
    userForpageProfile,
    user_id,
  } = props;
  const { user_img, first_name, last_name } = userForpageProfile;
  const { currentUser, isLoggedIn } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (currentUser) {
      const { friends } = currentUser;
      const { pending, accepted } = friends;
      const pendingList = pending.map((r) => r.sent_to.username);
      const acceptedList = accepted.map((r) => r.sent_to.username);
      if (acceptedList.includes(userForPageUsername)) {
        setFriendButton({ text: "Friends", disabled: true });
      } else if (pendingList.includes(userForPageUsername)) {
        setFriendButton({ text: "Pending...", disabled: true });
      } else {
        setFriendButton({ text: "Add Friend", disabled: false });
      }
    }
  }, [currentUser, userForPageUsername]);

  const handleFriendButtonMethod = () => {
    const friendRequest = {
      sent_to: {
        username: userForPageUsername,
        user_id: user_id,
        user_img: userForpageProfile.user_img,
      },
      sent_from: {
        username: currentUser.username,
        user_id: currentUser.user_id,
        user_img: currentUser.profile.user_img,
      },
    };
    Axios.post(
      `${process.env.REACT_APP_API_URL}/users/${currentUser.username}/friends/pending/${userForPageUsername}`,
      friendRequest
    )
      .then((res) => {
        console.log(res.data);
        setFriendButton({ text: "Pending...", disabled: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="UserProfileInfo-container">
      <h2>{userForPageUsername}</h2>
      {isLoggedIn && currentUser.username !== userForPageUsername ? (
        <div className="UserProfile-user-actions">
          <GeneralLink
            url={{
              pathname: "/messages/new",
              messageProps: {
                toUser: userForPageUsername,
              },
            }}
            text="message"
            addClass="general-theme-link"
          />
          <GeneralButton
            addClass="general-theme-button"
            disabled={friendButton.disabled}
            text={friendButton.text}
            method={() => handleFriendButtonMethod()}
          />
        </div>
      ) : null}
      <img src={user_img} alt={userForPageUsername} />
      <span>
        Name: {first_name} {last_name}
      </span>
      <span>Member since: {date_joined}</span>
    </div>
  );
};
