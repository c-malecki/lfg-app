import React from "react";
import { GeneralLink } from "../components_index";

export const UserPreview = (props) => {
  const { friend } = props;
  return (
    <div className="UserPreview-container">
      <img src={friend.profile.profile_pic} alt={friend.user_name} />
      <div className="UserPview-content">
        <GeneralLink
          url={`/users/${friend.user_name}`}
          text={friend.user_name}
          addClass="UserLink"
        />
      </div>
    </div>
  );
};
