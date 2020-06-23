import moose from "../../assets/images/moose.jpg";
import nopic from "../../assets/images/noprofilepic.png";

export const sampleUser = {
  user_id: "0",
  account: {
    user_name: "TestUser",
    profile_pic: moose,
    password: "password",
    first_name: "Anona",
    last_name: "Moose",
    email: "AnonAnimal@mail.com",
  },
};

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
  },
  {
    user_id: "1",
    account: {
      user_name: "Meeps",
      profile_pic: nopic,
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Chris",
      last_name: "Malecki",
      email: "chrismmalecki@gmail.com",
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
  },
];
