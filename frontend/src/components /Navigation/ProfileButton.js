import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton() {
  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
      <div id="profile-div">
        <button id="profile-button" onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </button>
        {showMenu && (
          <ul id="profile-dropdown">
            <li className="prof-list-item">{sessionUser.name}</li>
            <li className="prof-list-item">Write a story</li>
            <li className="prof-list-item">
              <NavLink id="story-link" to={`/user/stories`}>
                My stories
              </NavLink>
            </li>
            <li className="prof-list-item">
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </div>
  );
}

export default ProfileButton;
