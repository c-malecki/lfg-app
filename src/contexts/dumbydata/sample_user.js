export const sampleUsers = [
  {
    user_id: "1",
    account: {
      user_name: "TestUser",
      password: "password",
      first_name: "Anona",
      last_name: "Moose",
      email: "AnonAnimal@mail.com",
    },
    posts: [],
  },
  {
    user_id: "0",
    account: {
      user_name: "Meeps",
      password: "password",
      first_name: "Chris",
      last_name: "Malecki",
      email: "chrismmalecki@gmail.com",
    },
    posts: [
      {
        post_id: "1",
        author: "Meeps",
        date: "6/11/2020 12:06 p.m.",
        title: "Welcome to LFG",
        tags: ["lfg", "gamers"],
        content:
          'Looking For Gamers, or otherwise LFG, is a play on the gaming lingo acronym LFG which stands for "Looking For Group." LFG is a social media app to help gamers of all kinds, from retro or niche genres to modern and popular franchises, find a play group.',
        comments: [
          {
            comment_id: "1",
            date: "6/11/2020 12:22 p.m.",
            user_name: "IAlsoLuvPuppies",
            content: "Preach!",
          },
          {
            comment_id: "2",
            date: "6/11/2020 12:26 p.m.",
            user_name: "ILikeWeirdThangs",
            content: "Dope!",
          },
        ],
      },
    ],
  },
  {
    user_id: "2",
    account: {
      user_name: "IAlsoLuvPuppies",
      password: "password",
      first_name: "Buenovella",
      last_name: "BeNice",
      email: "MorePuppiesPlz@mail.com",
    },
    posts: [],
  },
  {
    user_id: "3",
    account: {
      user_name: "PuppyLuver1",
      password: "password",
      first_name: "Emily",
      last_name: "Elizabeth",
      email: "MorePuppiesPlz@mail.com",
    },
    posts: [
      {
        post_id: "2",
        author: "PuppyLuver1",
        date: "6/11/2020 4:05 p.m.",
        title: "Best thing ever!",
        tags: ["dogs", "puppies"],
        content: "Blah blah blah, something about puppies, blah blah blah.",
        comments: [
          {
            comment_id: "1",
            date: "6/11/2020 4:32 p.m.",
            user_name: "IAlsoLuvPuppies",
            content: "Preach!",
          },
        ],
      },
    ],
  },
  {
    user_id: "4",
    account: {
      user_name: "ILikeWeirdThangs",
      password: "password",
      first_name: "Igor",
      last_name: "Igor",
      email: "YesMasta32@email.com",
    },
    posts: [
      {
        post_id: "3",
        author: "ILikeWeirdThangs",
        date: "6/11/2020 6:23 p.m.",
        title: "Is pineapple on pizza really that bad?",
        tags: ["food", "weird"],
        content:
          "Aren't we being a little hyperbolic these days about food preferences??",
        comments: [
          {
            comment_id: "1",
            date: "6/11/2020 6:42 p.m.",
            user_name: "StrangeAndFleek",
            content:
              "Have you ever tried black licorice on pizza? Get on my level.",
          },
        ],
      },
    ],
  },
  {
    user_id: "5",
    account: {
      user_name: "StrangeAndFleek",
      password: "password",
      first_name: "Ally",
      last_name: "Yankovic",
      email: "WhereWeirdThingsGo@email.com",
    },
    posts: [],
  },
];
