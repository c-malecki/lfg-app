import { reformatDate } from "../../assets/util/reformatDate";

export const sampleMessages = [
  {
    user_name: "TestUser",
    messages: [
      {
        sender: false,
        read: false,
        date_sent: reformatDate(new Date()),
        from_username: "Meeps",
        to_username: "TestUser",
        subject: "Welcome to my demo app.",
        content: "Welcome!",
        message_id: "fdf3c954-0746-488d-a1ab-18d711b3c6df",
        total_unread_replies: 0,
        unread_reply: false,
        replies: [],
      },
    ],
  },
  {
    user_name: "Meeps",
    messages: [
      {
        sender: true,
        read: true,
        date_sent: reformatDate(new Date()),
        from_username: "Meeps",
        to_username: "TestUser",
        subject: "Welcome to my demo app.",
        content: "Welcome!",
        message_id: "fdf3c954-0746-488d-a1ab-18d711b3c6df",
        total_unread_replies: 0,
        unread_reply: false,
        replies: [],
      },
    ],
  },
  {
    user_name: "IAlsoLuvPuppies",
    messages: [],
  },
  {
    user_name: "PuppyLuver1",
    messages: [],
  },
  {
    user_name: "YesMasta74",
    messages: [],
  },
  {
    user_name: "StrangeAndFleek",
    messages: [],
  },
];
