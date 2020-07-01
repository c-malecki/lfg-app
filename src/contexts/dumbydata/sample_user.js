import moose from "../../assets/images/moose.jpg";
import meeps from "../../assets/images/Meeps.png";
import igor from "../../assets/images/igor.jpg";
import dred from "../../assets/images/LFGdefaultRed.png";
import dgre from "../../assets/images/LFGdefaultGreen.png";
import dpur from "../../assets/images/LFGdefaultPurple.png";

export const users = [
  {
    user_id: "11f3c9s4-0746-488d-a1ab-18d711b3c6df",
    user_name: "TestUser",
    account: {
      user_name: "TestUser",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Anona",
      last_name: "Moose",
      email: "AnonAnimal72@email.com",
    },
    groups: ["Diablo II LoD", "DogStuff", "LFG"],
    friends: [
      {
        user_id: "22f3c9s4-a746-488d-a1ab-18d711b3c6df",
        user_name: "Meeps",
        profile_pic: meeps,
        date_accepted: "06/10/2020",
        date_requested: "06/10/2020",
        pending: false,
        sender: false,
      },
    ],
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
    user_id: "22f3c9s4-a746-488d-a1ab-18d711b3c6df",
    user_name: "Meeps",
    account: {
      user_name: "Meeps",
      date_joined: "06/10/2020",
      password: "password",
      first_name: "Chris",
      last_name: "Malecki",
      email: "chrismmalecki@gmail.com",
    },
    groups: ["Diablo II LoD", "LFG"],
    friends: [
      {
        user_id: "11f3c9s4-0746-488d-a1ab-18d711b3c6df",
        user_name: "TestUser",
        profile_pic: moose,
        date_accepted: "06/10/2020",
        date_requested: "06/10/2020",
        pending: false,
        sender: true,
      },
    ],
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
    user_id: "33f3c9s4-3746-488d-a1ab-18d711b3c6df",
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
    friends: [],
    profile: {
      user_name: "IAlsoLuvPuppies",
      profile_pic: dred,
      date_joined: "06/10/2020",
      first_name: "Buenovella",
      last_name: "BeNice",
      bio: "Random dumby user.",
    },
  },
  {
    user_id: "44f3c9s4-4746-488d-a1ab-18d711b3c6df",
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
    friends: [],
    profile: {
      user_name: "PuppyLuver1",
      profile_pic: dgre,
      date_joined: "06/10/2020",
      first_name: "Emily",
      last_name: "Elizabeth",
      bio: "Random dumby user.",
    },
  },
  {
    user_id: "55f3c9s4-5746-488d-a1ab-18d711b3c6df",
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
    friends: [],
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
    user_id: "66f3c9s4-6746-488d-a1ab-18d711b3c6df",
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
    friends: [],
    profile: {
      user_name: "StrangeAndFleek",
      profile_pic: dpur,
      date_joined: "06/10/2020",
      first_name: "Ally",
      last_name: "Yankovic",
      bio: "Random dumby user.",
    },
  },
];
