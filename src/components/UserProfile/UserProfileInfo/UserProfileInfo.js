import React, { useContext } from "react";
import { GeneralLink, GeneralButton } from "../../components_index";
import { UsersState, UsersDispatch } from "../../../contexts/context_index";

export const UserProfileInfo = (props) => {
  const { user_name, account, profile } = props.userProfile;
  const { date_joined, first_name, last_name } = account;
  const { profile_pic } = profile;
  const { currentUser, isLoggedIn } = useContext(UsersState);
  const dispatch = useContext(UsersDispatch);
  const addFriendText = () => {
    const { friends } = currentUser;
    const mutualFriends = friends.filter(
      (f) => f.user_name === user_name && f.pending === false
    ).length;
    const pendingFriends = friends.filter(
      (f) => f.user_name === user_name && f.pending === true
    ).length;
    if (mutualFriends > 0) {
      return "Friends";
    } else if (pendingFriends > 0) {
      return "Pending";
    } else {
      return "Add Friend";
    }
  };
  const friendButtonDisabled =
    addFriendText() === "Friends" || addFriendText() === "Pending"
      ? true
      : false;
  return (
    <div className="UserProfileInfo-container">
      <h2>{user_name}</h2>
      {isLoggedIn && currentUser.user_name !== user_name ? (
        <div className="UserProfile-user-actions">
          <GeneralLink
            url={`/messages/new/to-${user_name}`}
            text="message"
            addClass="general-theme-link"
          />
          <GeneralButton
            disabled={friendButtonDisabled}
            addClass="general-theme-button"
            text={addFriendText()}
            method={() =>
              dispatch({
                type: "SEND_FRIEND_REQUEST",
                from: currentUser.user_name,
                to: user_name,
              })
            }
          />
        </div>
      ) : null}
      <img src={profile_pic} alt={user_name} />
      <span>
        Name: {first_name} {last_name}
      </span>
      <span>Member since: {date_joined}</span>
    </div>
  );
};
