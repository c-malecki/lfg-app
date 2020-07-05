import React, { useContext } from "react";
import { UsersState } from "../../../contexts/context_index";
import { GeneralLink } from "../../components_index";

export const CurrentUserMobile = (props) => {
  const { currentUser } = useContext(UsersState);
  return (
    <div className="CurrentUserMobile-container">
      <div className="CurrentUserMobile-content">
        {currentUser ? (
          <>
            <h3 className="component-heading">
              <GeneralLink
                url={`/users/${currentUser.user_name}`}
                text={`${currentUser.user_name}`}
                addClass="PageContentLink"
              />
            </h3>
            <img
              src={currentUser.profile.profile_pic}
              alt={currentUser.user_name}
            />
            <span>
              Friends:{" "}
              {currentUser.friends.filter((f) => f.pending === false).length}
            </span>
            <span>Groups: {currentUser.groups.length}</span>
          </>
        ) : null}
      </div>
    </div>
  );
};
