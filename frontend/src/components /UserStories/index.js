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
                <div id="ud-feed-container">
                    <div id="ud-left-div">

                    </div>
                    <div id="ud-center-div">
                        <h2>Your stories</h2>
                        <ul>
                            {userStories.map(story => {
                                let d = new Date(story.createdAt);
                                let dateWritten = d.toString().slice(4, 10)
                                return(
                                    <li key={story.id} id="feed-list">
                                        <div className="story-container">
                                            <div className="story-details">
                                                <p>{story.User.name}</p>
                                                <NavLink id="story-link" to={`/stories/${story.id}`}>
                                                    <h2>{story.title}</h2>
                                                    <p id="subtitle">{story.subtitle}</p>
                                                </NavLink>
                                                <p>{dateWritten}</p>
                                                <div id="e-d-btn-ctn">
                                                    <NavLink to={`/edit/story/${story.id}`}>
                                                        <button className="edit-del-btn" type="submit">Edit</button>
                                                    </NavLink>
                                                    <button className="edit-del-btn" type="submit"
                                                        onClick={() => dispatch(deleteStory(story.id))}>
                                                            Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <NavLink id="story-link" to={`/stories/${story.id}`}>
                                                    <img id="feed-img" src={story.imageUrl} alt="story"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div id="ud-right-div">

                    </div>
                </div>
            </>
        )
    } else {
        return (
            <Redirect to="/" />
        );
    }

}



export default UserStories;
