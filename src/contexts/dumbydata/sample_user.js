import moose from "../../assets/images/moose.jpg";
import nopic from "../../assets/images/noprofilepic.png";
import meeps from "../../assets/images/Meeps.png";
import igor from "../../assets/images/igor.jpg";
import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    user_id: uuidv4(),
    user_name: "TestUser",
    account: {
      user_name: "TestUser",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Anona",
      last_name: "Moose",
      email: "AnonAnimal72@email.com",
    },
    groups: ["Diablo II LoD", "DogStuff"],
    profile: {
      user_name: "TestUser",
      profile_pic: moose,
      date_joined: "06/10/2020",
      first_name: "Anona",
      last_name: "Moose",
      bio: "I am a demo user. You can edit my profile.",
    },
  },
  {
    user_id: uuidv4(),
    user_name: "Meeps",
    account: {
      user_name: "Meeps",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Chris",
      last_name: "Malecki",
      email: "chrismmalecki@gmail.com",
    },
    groups: ["Diablo II LoD"],
    profile: {
      user_name: "Meeps",
      profile_pic: meeps,
      date_joined: "06/10/2020",
      first_name: "Chris",
      last_name: "Malecki",
      bio: "I am the creator of LFG.",
    },
  },
  {
    user_id: uuidv4(),
    user_name: "IAlsoLuvPuppies",
    account: {
      user_name: "IAlsoLuvPuppies",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Buenovella",
      last_name: "BeNice",
      email: "MorePuppiesPlz@email.com",
    },
    groups: ["DogStuff"],
    profile: {
      user_name: "IAlsoLuvPuppies",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      first_name: "Buenovella",
      last_name: "BeNice",
      bio: "Random dumby user.",
    },
  },
  {
    user_id: uuidv4(),
    user_name: "PuppyLuver1",
    account: {
      user_name: "PuppyLuver1",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Emily",
      last_name: "Elizabeth",
      email: "MorePuppiesPlz@email.com",
    },
    groups: ["DogStuff"],
    profile: {
      user_name: "PuppyLuver1",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      first_name: "Emily",
      last_name: "Elizabeth",
      bio: "Random dumby user.",
    },
  },
  {
    user_id: uuidv4(),
    user_name: "YesMasta74",
    account: {
      user_name: "YesMasta74",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Igor",
      last_name: "Igor",
      email: "ItsEyeGor@email.com",
    },
    groups: [],
    profile: {
      user_name: "YesMasta74",
      profile_pic: igor,
      date_joined: "06/10/2020",
      first_name: "Igor",
      last_name: "Igor",
      bio: "Random dumby user.",
    },
  },
  {
    user_id: uuidv4(),
    user_name: "StrangeAndFleek",
    account: {
      user_name: "StrangeAndFleek",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Ally",
      last_name: "Yankovic",
      email: "LetsGetWeird@email.com",
    },
    groups: [],
    profile: {
      user_name: "StrangeAndFleek",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      first_name: "Ally",
      last_name: "Yankovic",
      bio: "Random dumby user.",
    },
  },
];
