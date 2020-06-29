import React from "react";
import { GeneralLink } from "../../components_index";

export const UserProfileInfo = (props) => {
  const { user_name, account, profile } = props.userProfile;
  const { date_joined, first_name, last_name } = account;
  const { profile_pic } = profile;
  return (
    <div className="UserProfileInfo-container">
      <h2>{user_name}</h2>
      <GeneralLink
        url={`/messages/new/to-${user_name}`}
        text="message"
        addClass="MessageUserLink"
      />
      <img src={profile_pic} alt={user_name} />
      <span>
        Name: {first_name} {last_name}
      </span>
      <span>Member since: {date_joined}</span>
    </div>
  );
};
