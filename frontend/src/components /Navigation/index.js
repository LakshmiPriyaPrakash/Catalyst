import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const credential = "Demo-lition";
  const password = "password";

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="user-nav" to={`/user/stories`}>
                  My stories
        </NavLink>
        <NavLink className="user-nav" to={`/story/new`}>
                  Write a story
        </NavLink>
        <ProfileButton />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button id="demo-btn"
          onClick={() => dispatch(sessionActions.login({ credential, password }))}>
            Demo User
        </button>
      </>
    );
  }

  return (
    <div id="nav-container">
      <div id="home-link-div">
        <img id="c-logo" src="https://res.cloudinary.com/lpriya/image/upload/v1633930410/Catalyst/earth-favicon_hoyodj.png" alt="catalyst logo"/>
        <NavLink id="home-link" exact to="/">Catalyst</NavLink>
      </div>
      <div id="nav-buttons">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
