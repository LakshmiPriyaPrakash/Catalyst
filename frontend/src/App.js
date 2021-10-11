import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components /Navigation";
import Homepage from "./components /HomePage";
import Userdashboard from "./components /UserDashboard";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Homepage />
      <Userdashboard />
    </>
  );
}

export default App;
