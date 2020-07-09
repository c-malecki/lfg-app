import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  PostsContextProvider,
  UsersContextProvider,
  GroupsContextProvider,
  MessagesContextProvider,
  AppContextProvider,
} from "../../contexts/context_index";
// Redux
import { useDispatch } from "react-redux";
import { fetchDemoUser } from "../../redux/actions/user-actions";
import { fetchAllPosts } from "../../redux/actions/posts-actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchDemoUser());
  dispatch(fetchAllPosts());
  return (
    <div className="App">
      <AppContextProvider>
        <UsersContextProvider>
          <PostsContextProvider>
            <MessagesContextProvider>
              <GroupsContextProvider>
                <Header />
                <PageContent />
              </GroupsContextProvider>
            </MessagesContextProvider>
          </PostsContextProvider>
        </UsersContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
