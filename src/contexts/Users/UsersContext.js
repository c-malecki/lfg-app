import React, { createContext, useReducer, useEffect } from "react";
import { users } from "../dumbydata/sample_user";

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
        account: {
          ...newAllUsers[idx].account,
          bio: action.bio,
        },
      };
      return { ...state, allUsers: newAllUsers, currentUser: newAllUsers[idx] };
    }
    case "SEND_MESSAGE": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.from
      );
      const newAllUsers = [...allUsers];
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        messages: {
          ...newAllUsers[idx].messages,
          sent: [...newAllUsers[idx].messages.sent, action.sent_message],
        },
      };
      return { ...state, allUsers: newAllUsers, currentUser: newAllUsers[idx] };
    }
    case "RECEIVE_MESSAGE": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.to
      );
      const newAllUsers = [...allUsers];
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        messages: {
          ...newAllUsers[idx].messages,
          inbox: [...newAllUsers[idx].messages.inbox, action.received_message],
        },
      };
      return { ...state, allUsers: newAllUsers };
    }
    case "READ_MESSAGE": {
      const { allUsers } = state;
      const idx = allUsers.findIndex(
        (user) => user.account.user_name === action.user
      );
      const newAllUsers = [...allUsers];
      let readMessage = newAllUsers[idx].messages.inbox.find(
        (message) => message.message_id === action.message_id
      );
      readMessage = {
        ...readMessage,
        read: true,
      };
      const previousMessages = newAllUsers[idx].messages.inbox.filter(
        (message) => message.message_id !== action.message_id
      );
      newAllUsers[idx] = {
        ...newAllUsers[idx],
        messages: {
          ...newAllUsers[idx].messages,
          inbox: [...previousMessages, readMessage],
        },
      };
      return { ...state, allUsers: newAllUsers, currentUser: newAllUsers[idx] };
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
