import React from "react";
import { Header, MobilePageNav } from "../../components/components_index";
import { PageContent } from "../containers_index";
import { useDispatch } from "react-redux";
import { fetchDemoUser } from "../../redux/actions/user-actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchDemoUser());
  return (
    <div className="App">
      <Header />
      <PageContent />
      <MobilePageNav />
    </div>
  );
}

export default App;
