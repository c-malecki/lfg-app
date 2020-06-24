import moose from "../../assets/images/moose.jpg";
import nopic from "../../assets/images/noprofilepic.png";
import meeps from "../../assets/images/Meeps.png";
import { reformatDate } from "../../assets/util/reformatDate";
import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    user_id: uuidv4(),
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
          message_id: "fdf3c954-0746-488d-a1ab-18d711b3c6df",
        },
      ],
      sent: [],
    },
  },
  {
    user_id: uuidv4(),
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
          message_id: "b06b8eb7-9d32-4f18-a94b-4e03bf4f647b",
        },
      ],
    },
  },
  {
    user_id: uuidv4(),
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
    user_id: uuidv4(),
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
    user_id: uuidv4(),
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
    user_id: uuidv4(),
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
