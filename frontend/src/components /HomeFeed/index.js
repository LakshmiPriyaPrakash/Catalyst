import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './HomeFeed.css';


function HomeFeed() {
    const allStories = useSelector(state => state.stories);
    const storiesArr = Object.values(allStories);

    if(storiesArr.length) {
        return (
            <>
                <h2></h2>
                 <ul>
                    {storiesArr.map(story => {
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
            </>
        )
    } else {
        return null;
    }

}



export default HomeFeed;
