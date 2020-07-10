import React from "react";
// import { GeneralLink, GeneralButton } from "../../components_index";
// import { useSelector } from "react-redux";

export const UserProfileInfo = (props) => {
  const { username, account, profile } = props.userInfo;
  const { date_joined, first_name, last_name } = account;
  const { user_img } = profile;
  // const { currentUser, isLoggedIn } = useSelector((state) => state.userReducer);
  // const addFriendText = () => {
  //   if (currentUser && isLoggedIn) {
  //     const { friends } = currentUser;
  //     const mutualFriends = friends.accepted.filter(
  //       (f) => f.user_name === username && f.pending === false
  //     ).length;
  //     const pendingFriends = friends.pending.filter(
  //       (f) => f.user_name === username && f.pending === true
  //     ).length;
  //     if (mutualFriends > 0) {
  //       return "Friends";
  //     } else if (pendingFriends > 0) {
  //       return "Pending";
  //     } else {
  //       return "Add Friend";
  //     }
  //   } else {
  //     return;
  //   }
  // };
  // const friendButtonDisabled =
  //   addFriendText() === "Friends" || addFriendText() === "Pending"
  //     ? true
  //     : false;
  return (
    <div className="UserProfileInfo-container">
      <h2>{username}</h2>
      {/* {isLoggedIn && currentUser.user_name !== username ? (
        <div className="UserProfile-user-actions">
          <GeneralLink
            url={`/messages/new/to-${username}`}
            text="message"
            addClass="general-theme-link"
          />
          <GeneralButton
            disabled={friendButtonDisabled}
            addClass="general-theme-button"
            text={addFriendText()}
            method={() => null}
          />
        </div>
      ) : null} */}
      <img src={user_img} alt={username} />
      <span>
        Name: {first_name} {last_name}
      </span>
      <span>Member since: {date_joined}</span>
    </div>
  );
};
