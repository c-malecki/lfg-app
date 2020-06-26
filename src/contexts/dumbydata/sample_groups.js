import LoD from "../../assets/images/Lod.png";
import nopic from "../../assets/images/noprofilepic.png";

export const sampleGroups = [
  {
    group_name: "Diablo II LoD",
    group_id: "da7043d7-7fb6-489f-b9d4-3b1cb2fe844b",
    group_img: LoD,
    group_genre: "ARPG",
    group_description:
      "A community that believes in games that age like fine wine. We all continue to love and explore the seemingly endless possbilities of Blizzard's master piece, Diablo II: LoD.",
    group_tags: ["Blizzard", "Diablo", "ARPG"],
    date_created: "06/10/2020",
    members_list: ["Meeps", "TestUser"],
    group_members: [
      {
        user_name: "Meeps",
        date_joined: "06/10/2020",
        role: "admin",
        member_id: "1",
      },
      {
        user_name: "TestUser",
        date_joined: "06/11/2020",
        role: "initiate",
        member_id: "2",
      },
    ],
  },
  {
    group_name: "DogStuff",
    group_id: "da70s3d7-7bb6-389f-b9d4-3b1cbaae844b",
    group_img: nopic,
    group_genre: "Random",
    group_description: "We all are dog freaks.",
    group_tags: ["Dogs", "Puppies", "Animals"],
    date_created: "06/11/2020",
    members_list: ["IAlsoLuvPuppies", "TestUser"],
    group_members: [
      {
        user_name: "PuppyLuver1",
        date_joined: "06/11/2020",
        role: "admin",
        member_id: "1",
      },
      {
        user_name: "IAlsoLuvPuppies",
        date_joined: "06/11/2020",
        role: "mod",
        member_id: "2",
      },
      {
        user_name: "TestUser",
        date_joined: "06/11/2020",
        role: "initiate",
        member_id: "3",
      },
    ],
  },
];

// create genre list

// add groups to users
// add group to posts
