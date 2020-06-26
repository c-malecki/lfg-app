import React, { createContext, useReducer } from "react";
import { sampleMessages } from "../dumbydata/sample_messages";

export const MessagesState = createContext();
export const MessagesDispatch = createContext();

const initialState = {
  userMessages: sampleMessages,
};

const messagesReducer = (state, action) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      const { userMessages } = state;
      const idx = userMessages.findIndex(
        (user) => user.user_name === action.from
      );
      const newUserMessages = [...userMessages];
      newUserMessages[idx] = {
        ...newUserMessages[idx],
        sent: [...newUserMessages[idx].sent, action.sent_message],
      };
      return { userMessages: newUserMessages };
    }
    case "RECEIVE_MESSAGE": {
      const { userMessages } = state;
      const idx = userMessages.findIndex(
        (user) => user.user_name === action.to
      );
      const newUserMessages = [...userMessages];
      newUserMessages[idx] = {
        ...newUserMessages[idx],
        inbox: [...newUserMessages[idx].inbox, action.received_message],
      };
      return { userMessages: newUserMessages };
    }
    case "READ_MESSAGE": {
      const { userMessages } = state;
      const idx = userMessages.findIndex(
        (user) => user.user_name === action.user
      );
      const newUserMessages = [...userMessages];
      let readMessage = newUserMessages[idx].inbox.find(
        (message) => message.message_id === action.message_id
      );
      readMessage = {
        ...readMessage,
        read: true,
      };
      const previousMessages = newUserMessages[idx].inbox.filter(
        (message) => message.message_id !== action.message_id
      );
      newUserMessages[idx] = {
        ...newUserMessages[idx],
        inbox: [...previousMessages, readMessage],
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
