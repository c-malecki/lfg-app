import { v4 as uuidv4 } from "uuid";

export const samplePosts = [
  {
    post_id: "ba7048d7-7fb6-479f-b9d4-3b10b2fe844b",
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
    post_id: "1f36da45-bd5a-4e41-a93b-d2ca47dd33c2",
    author: "PuppyLuver1",
    date: "06/11/2020, 4:05 PM",
    title: "Best thing ever!",
    tags: ["dogs", "puppies"],
    group: "DogStuff",
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
    post_id: "a797f2f5-5c1b-4093-a762-d092254dbb67",
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
  {
    post_id: "c798f2f5-5c1b-4093-a7g2-d0222d4dbb67",
    author: "Meeps",
    date: "06/11/2020, 1:19 PM",
    title: "Diablo II calculator project",
    tags: ["ARPG", "Diablo"],
    group: "Diablo II LoD",
    content:
      "I've been working on a project over time to create a full scale Diablo II character calcultor. Along side the calculator, I have been creating the first Diablo II public resource API to help other fans and developers create their own content or applications with ease.",
    comments: [],
  },
];
