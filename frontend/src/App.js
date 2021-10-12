import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components /Navigation";
import Homepage from "./components /HomePage";
import Userdashboard from "./components /UserDashboard";
import StoryDetail from "./components /StoryDetails";
import UserStories from "./components /UserStories";
import WriteStory from "./components /WriteStory";
import EditStory from "./components /UpdateStory";
import { getStories } from "./store/stories";


function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getStories());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/" exact>
            <Homepage />
        </Route>
        <Route path="/user/dashboard">
          <Userdashboard />
        </Route>
        <Route path="/stories/:storyId">
          <StoryDetail />
        </Route>
        <Route path="/user/stories">
          <UserStories />
        </Route>
        <Route path="/story/new">
          <WriteStory />
        </Route>
        <Route path="/edit/story/:editStoryId">
          <EditStory />
        </Route>
        <Route path="/">
            <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
