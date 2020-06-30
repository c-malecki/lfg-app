import React, { useContext } from "react";
import { GeneralLink } from "../components_index";
import { UsersDispatch } from "../../contexts/context_index";

export const FriendsUserPreview = (props) => {
  const { friend, currentUser } = props;
  const dispatch = useContext(UsersDispatch);
  return (
    <div className="UserPreview-container">
      <img src={friend.profile_pic} alt={friend.user_name} />
      <div className="UserPview-content">
        <GeneralLink
          url={`/users/${friend.user_name}`}
          text={friend.user_name}
          addClass="UserLink"
        />
      </div>
      {friend.pending && friend.sender ? (
        <button
          onClick={() =>
            dispatch({
              type: "CANCEL_DENY_REMOVE_FRIEND",
              accepter: currentUser,
              sender: friend.user_name,
            })
          }
        >
          cancel
        </button>
      ) : null}
      {friend.pending && friend.sender === false ? (
        <>
          <button
            onClick={() =>
              dispatch({
                type: "ACCEPT_FRIEND_REQUEST",
                accepter: currentUser,
                sender: friend.user_name,
              })
            }
          >
            accept
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "CANCEL_DENY_REMOVE_FRIEND",
                accepter: currentUser,
                sender: friend.user_name,
              })
            }
          >
            deny
          </button>
        </>
      ) : null}
      {friend.pending === false ? (
        <button
          onClick={() =>
            dispatch({
              type: "CANCEL_DENY_REMOVE_FRIEND",
              accepter: currentUser,
              sender: friend.user_name,
            })
          }
        >
          remove
        </button>
      ) : null}
    </div>
  );
};
