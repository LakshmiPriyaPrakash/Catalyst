import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteStory } from '../../store/stories';
import { Redirect } from 'react-router';
import './UserStories.css';


function UserStories() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const allStories = useSelector(state => state.stories);
    const storiesArr = Object.values(allStories);

    let userStories;

    if(sessionUser) {
        userStories = storiesArr.filter(story => story.authorId === sessionUser.id);

        return (
            <>
                <h2>Your stories</h2>
                 <ul>
                    {userStories.map(story => {
                        let d = new Date(story.createdAt);
                        let dateWritten = d.toString().slice(4, 10)
                        return(
                            <li key={story.id} id="feed-list">
                                <p>{story.User.name}</p>
                                <NavLink id="story-link" to={`/stories/${story.id}`}>
                                    <img id="feed-img" src={story.imageUrl} alt="story"/>
                                    <h3>{story.title}</h3>
                                    <h5>{story.subtitle}</h5>
                                </NavLink>
                                <p>{dateWritten}</p>
                                <NavLink to={`/edit/story/${story.id}`}>
                                    <button className="edit-del-btn" type="submit">Edit</button>
                                </NavLink>
                                    <button className="edit-del-btn" type="submit"
                                    onClick={() => dispatch(deleteStory(story.id))}>
                                        Delete
                                    </button>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    } else {
        return (
            <Redirect to="/" />
        );
    }

}



export default UserStories;
