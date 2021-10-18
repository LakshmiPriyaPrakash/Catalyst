import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './HomeFeed.css';


function HomeFeed() {
    const allStories = useSelector(state => state.stories);
    const storiesArr = Object.values(allStories);

    if(storiesArr.length) {
        return (
            <>
                 <ul>
                    {storiesArr.map(story => {
                        let d = new Date(story.createdAt);
                        let dateWritten = d.toString().slice(4, 10)
                        return(
                            <li key={story.id} className="feed-list">
                                <div className="story-container">
                                    <div className="story-details">
                                        <p className="user-name"><FaRegUserCircle /> {story.User.name}</p>
                                        <NavLink className="story-link" to={`/stories/${story.id}`}>
                                            <h2>{story.title}</h2>
                                            <p className="subtitle">{story.subtitle}</p>
                                        </NavLink>
                                        <p className="date-written">{dateWritten}</p>
                                    </div>
                                    <div>
                                        <NavLink className="story-link" to={`/stories/${story.id}`}>
                                            <img id="feed-img" src={story.imageUrl} alt="story"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    } else {
        return null;
    }

}



export default HomeFeed;
