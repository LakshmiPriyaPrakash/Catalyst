import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import * as sessionActions from "./store/session";
import Navigation from "./components /Navigation";
import Homepage from "./components /HomePage";
import Userdashboard from "./components /UserDashboard";
import StoryDetail from "./components /StoryDetails";
import { getStories } from "./store/stories";

function App() {
  const sessionUser = useSelector(state => state.session.user);

  let userDisplay;
  if(sessionUser) {
    userDisplay = (
      <Route path="/user/dashboard">
        <Userdashboard />
      </Route>
    );
  } else {
    userDisplay = (
      <Route path="/" exact>
          <Homepage />
      </Route>
    );
  }

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
      {userDisplay}
        <Route path="/stories/:storyId">
          <StoryDetail />
        </Route>
        <Route path="/">
            <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
