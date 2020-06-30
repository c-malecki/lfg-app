import React, { createContext, useReducer, useEffect } from "react";
import { users } from "../dumbydata/sample_user";
import { reformatDate } from "../../assets/util/reformatDate";

export const UsersState = createContext();
export const UsersDispatch = createContext();

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  allUsers: users,
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEMO_USER": {
      return { ...state, isLoggedIn: true, currentUser: action.demoUser };
    }
    case "LOGIN": {
      return { ...state, isLoggedIn: true, currentUser: action.userData };
    }
    case "LOGOUT": {
      return { ...state, isLoggedIn: false, currentUser: null };
    }
    case "UPDATE_BIO": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.user_name
      );
      const newAllUsers = [...allUsers];
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        profile: {
          ...newAllUsers[idx].profile,
          bio: action.bio,
        },
      };
      return { ...state, allUsers: newAllUsers, currentUser: newAllUsers[idx] };
    }
    case "SEND_FRIEND_REQUEST": {
      const { allUsers } = state;
      const fromIdx = allUsers.findIndex(
        (user) => user.user_name === action.from
      );
      const toIdx = allUsers.findIndex((user) => user.user_name === action.to);
      const newAllUsers = [...allUsers];
      newAllUsers[fromIdx] = {
        ...newAllUsers[fromIdx],
        friends: [
          ...newAllUsers[fromIdx].friends,
          {
            user_id: newAllUsers[toIdx].user_id,
            user_name: newAllUsers[toIdx].user_name,
            profile_pic: newAllUsers[toIdx].profile.profile_pic,
            date_accepted: "",
            date_requested: reformatDate(new Date()),
            sender: true,
            pending: true,
          },
        ],
      };
      newAllUsers[toIdx] = {
        ...newAllUsers[toIdx],
        friends: [
          ...newAllUsers[toIdx].friends,
          {
            user_id: newAllUsers[fromIdx].user_id,
            user_name: newAllUsers[fromIdx].user_name,
            profile_pic: newAllUsers[fromIdx].profile.profile_pic,
            date_accepted: "",
            date_requested: reformatDate(new Date()),
            sender: false,
            pending: true,
          },
        ],
      };
      return {
        ...state,
        allUsers: newAllUsers,
        currentUser: newAllUsers[fromIdx],
      };
    }
    case "ACCEPT_FRIEND_REQUEST": {
      const { allUsers } = state;
      const fromIdx = allUsers.findIndex(
        (user) => user.user_name === action.sender
      );
      const toIdx = allUsers.findIndex(
        (user) => user.user_name === action.accepter
      );
      const newAllUsers = [...allUsers];
      let requestFromIdx = newAllUsers[toIdx].friends.findIndex(
        (r) => r.user_name === action.sender
      );
      let requestToIdx = newAllUsers[fromIdx].friends.findIndex(
        (r) => r.user_name === action.accepter
      );
      newAllUsers[fromIdx].friends[requestToIdx] = {
        ...newAllUsers[fromIdx].friends[requestToIdx],
        pending: false,
        date_accepted: reformatDate(new Date()),
      };
      newAllUsers[toIdx].friends[requestFromIdx] = {
        ...newAllUsers[toIdx].friends[requestFromIdx],
        pending: false,
        date_accepted: reformatDate(new Date()),
      };
      return {
        ...state,
        allUsers: newAllUsers,
        currentUser: newAllUsers[toIdx],
      };
    }
    case "CANCEL_DENY_REMOVE_FRIEND": {
      const { allUsers } = state;
      const fromIdx = allUsers.findIndex(
        (user) => user.user_name === action.sender
      );
      const toIdx = allUsers.findIndex(
        (user) => user.user_name === action.accepter
      );
      const newAllUsers = [...allUsers];
      newAllUsers[fromIdx] = {
        ...newAllUsers[fromIdx],
        friends: newAllUsers[fromIdx].friends.filter(
          (req) => req.user_name !== action.accepter
        ),
      };
      newAllUsers[toIdx] = {
        ...newAllUsers[toIdx],
        friends: newAllUsers[toIdx].friends.filter(
          (req) => req.user_name !== action.sender
        ),
      };
      return {
        ...state,
        allUsers: newAllUsers,
        currentUser: newAllUsers[toIdx],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  useEffect(() => {
    dispatch({ type: "SET_DEMO_USER", demoUser: users[0] });
  }, []);
  return (
    <UsersState.Provider value={state}>
      <UsersDispatch.Provider value={dispatch}>
        {children}
      </UsersDispatch.Provider>
    </UsersState.Provider>
  );
};
