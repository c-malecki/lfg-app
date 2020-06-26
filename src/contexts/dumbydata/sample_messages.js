import { reformatDate } from "../../assets/util/reformatDate";

export const sampleMessages = [
  {
    user_name: "TestUser",
    inbox: [
      {
        read: false,
        date_received: reformatDate(new Date()),
        from_username: "Meeps",
        subject: "Welcome to my demo app.",
        content: "Welcome!",
        message_id: "fdf3c954-0746-488d-a1ab-18d711b3c6df",
        replys: [],
      },
    ],
    sent: [],
  },
  {
    user_name: "Meeps",
    inbox: [],
    sent: [
      {
        date_sent: reformatDate(new Date()),
        to_username: "TestUser",
        subject: "Welcome to my demo app.",
        content: "Test",
        message_id: "b06b8eb7-9d32-4f18-a94b-4e03bf4f647b",
        replys: [],
      },
    ],
  },
  {
    user_name: "IAlsoLuvPuppies",
    inbox: [],
    sent: [],
  },
  {
    user_name: "PuppyLuver1",
    inbox: [],
    sent: [],
  },
  {
    user_name: "YesMasta74",
    inbox: [],
    sent: [],
  },
  {
    user_name: "StrangeAndFleek",
    inbox: [],
    sent: [],
  },
];
