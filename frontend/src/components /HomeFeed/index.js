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
                <h2>All stories</h2>
                 <ul>
                    {storiesArr.map(story => {
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
