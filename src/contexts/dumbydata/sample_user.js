import moose from "../../assets/images/moose.jpg";
import nopic from "../../assets/images/noprofilepic.png";
import meeps from "../../assets/images/Meeps.png";
import { reformatDate } from "../../assets/util/reformatDate";

export const users = [
  {
    user_id: "0",
    account: {
      user_name: "TestUser",
      profile_pic: moose,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Anona",
      last_name: "Moose",
      email: "AnonAnimal@mail.com",
      bio: "Test",
    },
    messages: {
      inbox: [
        {
          read: false,
          date_received: reformatDate(new Date()),
          from_username: "Meeps",
          subject: "Welcome to my demo app.",
          content: "Welcome!",
          message_id: "1",
        },
      ],
      sent: [],
    },
  },
  {
    user_id: "1",
    account: {
      user_name: "Meeps",
      profile_pic: meeps,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Chris",
      last_name: "Malecki",
      email: "chrismmalecki@gmail.com",
    },
    messages: {
      inbox: [],
      sent: [
        {
          date_sent: reformatDate(new Date()),
          to_username: "TestUser",
          subject: "Welcome to my demo app.",
          content: "Test",
          message_id: "1",
        },
      ],
    },
  },
  {
    user_id: "2",
    account: {
      user_name: "IAlsoLuvPuppies",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Buenovella",
      last_name: "BeNice",
      email: "MorePuppiesPlz@email.com",
    },
    messages: {
      inbox: [],
      sent: [],
    },
  },
  {
    user_id: "3",
    account: {
      user_name: "PuppyLuver1",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Emily",
      last_name: "Elizabeth",
      email: "MorePuppiesPlz@email.com",
    },
    messages: {
      inbox: [],
      sent: [],
    },
  },
  {
    user_id: "4",
    account: {
      user_name: "YesMasta74",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Igor",
      last_name: "Igor",
      email: "ItsEyeGor@email.com",
    },
    messages: {
      inbox: [],
      sent: [],
    },
  },
  {
    user_id: "5",
    account: {
      user_name: "StrangeAndFleek",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Ally",
      last_name: "Yankovic",
      email: "LetsGetWeird@email.com",
    },
    messages: {
      inbox: [],
      sent: [],
    },
  },
];
