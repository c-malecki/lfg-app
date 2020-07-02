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
        subject: "Welcome to my LFG demo.",
        content:
          "This app is currently under constant construction, but feel free to mess around with its current features and find ways to break it if you can. As the prototyping progresses, I will be sure to add more custom designed assets and improve the thematic appeal alongside working through expanding features. If you have any suggestions, comments, or questions, feel free to email me. chrismmalecki@gmail.com",
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
        subject: "Welcome to my LFG demo.",
        content:
          "This app is currently under constant construction, but feel free to mess around with its current features and find ways to break it if you can. As the prototyping progresses, I will be sure to add more custom designed assets and improve the thematic appeal alongside working through expanding features. If you have any suggestions, comments, or questions, feel free to email me. chrismmalecki@gmail.com",
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
