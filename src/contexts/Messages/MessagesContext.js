import React, { createContext, useReducer } from "react";
import { sampleMessages } from "../dumbydata/sample_messages";

export const MessagesState = createContext();
export const MessagesDispatch = createContext();

const initialState = {
  userMessages: sampleMessages,
};

const messagesReducer = (state, action) => {
  switch (action.type) {
    case "SEND_RECEIVE_MESSAGE": {
      const { userMessages } = state;
      const fromIdx = userMessages.findIndex(
        (user) => user.user_name === action.message.from_username
      );
      const toIdx = userMessages.findIndex(
        (user) => user.user_name === action.message.to_username
      );
      const newUserMessages = [...userMessages];
      newUserMessages[fromIdx] = {
        ...newUserMessages[fromIdx],
        messages: [
          ...newUserMessages[fromIdx].messages,
          { sender: true, ...action.message },
        ],
      };
      newUserMessages[toIdx] = {
        ...newUserMessages[toIdx],
        messages: [
          ...newUserMessages[toIdx].messages,
          { sender: false, ...action.message },
        ],
      };
      return { userMessages: newUserMessages };
    }
    case "READ_MESSAGE": {
      const { userMessages } = state;
      const fromIdx = userMessages.findIndex(
        (user) => user.user_name === action.from
      );
      const toIdx = userMessages.findIndex(
        (user) => user.user_name === action.to
      );
      const newUserMessages = [...userMessages];
      let readFrom = newUserMessages[fromIdx].messages.find(
        (message) => message.message_id === action.message_id
      );
      let readTo = newUserMessages[toIdx].messages.find(
        (message) => message.message_id === action.message_id
      );
      readFrom = {
        ...readFrom,
        read: true,
      };
      readTo = {
        ...readTo,
        read: true,
      };
      const prevFrom = newUserMessages[fromIdx].messages.filter(
        (message) => message.message_id !== action.message_id
      );
      const prevTo = newUserMessages[toIdx].messages.filter(
        (message) => message.message_id !== action.message_id
      );
      newUserMessages[fromIdx] = {
        ...newUserMessages[fromIdx],
        messages: [...prevFrom, readFrom],
      };
      newUserMessages[toIdx] = {
        ...newUserMessages[toIdx],
        messages: [...prevTo, readTo],
      };
      return { userMessages: newUserMessages };
    }
    case "REPLY_TO_MESSAGE": {
      const { userMessages } = state;
      const fromIdx = userMessages.findIndex(
        (user) => user.user_name === action.from
      );
      const toIdx = userMessages.findIndex(
        (user) => user.user_name === action.to
      );
      const newUserMessages = [...userMessages];
      let replyFrom = newUserMessages[fromIdx].messages.find(
        (message) => message.message_id === action.message_id
      );
      let replyTo = newUserMessages[toIdx].messages.find(
        (message) => message.message_id === action.message_id
      );
      replyFrom = {
        ...replyFrom,
        replies: [...replyFrom.replies, action.reply],
      };
      replyTo = {
        ...replyTo,
        replies: [...replyTo.replies, action.reply],
      };
      const prevFrom = newUserMessages[fromIdx].messages.filter(
        (message) => message.message_id !== action.message_id
      );
      const prevTo = newUserMessages[toIdx].messages.filter(
        (message) => message.message_id !== action.message_id
      );
      newUserMessages[fromIdx] = {
        ...newUserMessages[fromIdx],
        messages: [...prevFrom, replyFrom],
      };
      newUserMessages[toIdx] = {
        ...newUserMessages[toIdx],
        messages: [...prevTo, replyTo],
      };
      return { userMessages: newUserMessages };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const MessagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer, initialState);
  return (
    <MessagesState.Provider value={state}>
      <MessagesDispatch.Provider value={dispatch}>
        {children}
      </MessagesDispatch.Provider>
    </MessagesState.Provider>
  );
};
