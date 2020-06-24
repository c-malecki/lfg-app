import { v4 as uuidv4 } from "uuid";

export const samplePosts = [
  {
    post_id: uuidv4(),
    author: "Meeps",
    date: "06/11/2020, 12:06 PM",
    title: "Welcome to LFG",
    tags: ["lfg", "gamers"],
    content:
      'Looking For Gamers, or otherwise LFG, is a play on the gaming lingo acronym LFG which stands for "Looking For Group." LFG is a social media app to help gamers of all kinds, from retro or niche genres to modern and popular franchises, find a play group.',
    comments: [
      {
        comment_id: uuidv4(),
        date: "06/11/2020,, 12:22 PM",
        user_name: "IAlsoLuvPuppies",
        content: "Preach!",
      },
      {
        comment_id: uuidv4(),
        date: "06/11/2020, 12:26 PM",
        user_name: "YesMasta74",
        content: "Dope!",
      },
    ],
  },
  {
    post_id: uuidv4(),
    author: "PuppyLuver1",
    date: "06/11/2020, 4:05 PM",
    title: "Best thing ever!",
    tags: ["dogs", "puppies"],
    content: "Blah blah blah, something about puppies, blah blah blah.",
    comments: [
      {
        comment_id: uuidv4(),
        date: "06/11/2020, 4:32 PM",
        user_name: "IAlsoLuvPuppies",
        content: "Preach!",
      },
    ],
  },
  {
    post_id: uuidv4(),
    author: "YesMasta74",
    date: "06/11/2020, 6:23 PM",
    title: "Is pineapple on pizza really that bad?",
    tags: ["food", "weird"],
    content:
      "Aren't we being a little hyperbolic these days about food preferences??",
    comments: [
      {
        comment_id: uuidv4(),
        date: "06/11/2020, 6:42 PM",
        user_name: "StrangeAndFleek",
        content:
          "Have you ever tried black licorice on pizza? Get on my level.",
      },
    ],
  },
];
