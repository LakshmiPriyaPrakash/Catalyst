import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import * as sessionActions from "./store/session";
import Navigation from "./components /Navigation";
import Homepage from "./components /HomePage";
import Userdashboard from "./components /UserDashboard";

function App() {
  const sessionUser = useSelector(state => state.session.user);

  let userDisplay;
  if(sessionUser) {
    userDisplay = (
      <Userdashboard />
    );
  } else {
    userDisplay = (
      <Homepage />
    );
  }

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {userDisplay}
    </>
  );
}

export default App;
