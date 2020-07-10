import {
  SEND_RECEIVE_MESSAGE,
  READ_MESSAGE,
  REPLY_TO_MESSAGE,
} from "../action-types";
import { sampleMessages } from "../dumydata";

const initialState = {
  userMessages: sampleMessages,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_RECEIVE_MESSAGE: {
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
          {
            sender: true,
            read: true,
            ...action.message,
            total_unread_replies: 0,
            unread_reply: false,
          },
        ],
      };
      newUserMessages[toIdx] = {
        ...newUserMessages[toIdx],
        messages: [
          ...newUserMessages[toIdx].messages,
          {
            sender: false,
            read: false,
            ...action.message,
            total_unread_replies: 0,
            unread_reply: false,
          },
        ],
      };
      return { userMessages: newUserMessages };
    }
    case READ_MESSAGE: {
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
        total_unread_replies: 0,
      };
      readTo = {
        ...readTo,
        read: true,
        total_unread_replies: 0,
        unread_reply: false,
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
    case REPLY_TO_MESSAGE: {
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
        replies: [...replyFrom.replies, { ...action.reply, sender: true }],
      };
      replyTo = {
        ...replyTo,
        read: false,
        total_unread_replies: replyTo.total_unread_replies + 1,
        unread_reply: true,
        replies: [...replyTo.replies, { ...action.reply, sender: false }],
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
      return state;
    }
  }
};
