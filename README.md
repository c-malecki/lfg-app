**LFG App**

Looking For Gamers, or LFG, is a play on a common acronym that is gaming slang "Looking for Group."  
The LFG App is a basic mock of a social media app tailored to gamers to help them find play groups  
for games of all kinds, from niche genres and retro games to popular modern franchises.

**Todos as of 7/14/2020**

- Currently, the basic data supplied is not thematic or on brand. It is purely for dumby data and initial prototyping purposes.

- Styling still needs an overhaul which is my next priority after having implemented an backend/API.

- Syncing the client app with the server/database still needs to be worked out so that real time changes take affect without reloading the app  
  which may cause some data loss on the client side.

- There is not a real session or any cookies. Redux is currently handling data related to the logged in user.

- Lots of refactoring involving component abstraction, some component crunching for more reusable and less specific utility components, conditional renders and operations  
  based on the logged in user, utility classes and variables for SASS/SCSS. Perhaps moving HTTP requests to Redux dispatches to clean up components.

**Features and Functionality as of 7/14/2020**

- By default, you are logged in as "TestUser." You can log in as any of the users seen in the app. The password for each mock account is "password."

- Currently you can log in and out of the application. When logged out, you can still view posts and their comments, but cannot add posts or comments.

- You can only create posts or add comments to a post while being logged in and only delete posts or comments associated with the logged in user account.

- Posts can be browsed by tags, users, or groups.

- Posts are made within Groups. (basically like subreddits)

- Messages and replies to messages can be sent between users.

- Friend requests can be sent, accepted, canceled, or denied between users. Users can also remove current friends.

- User profile bio can be edited so long as you are the logged in user of the profile being viewed.
