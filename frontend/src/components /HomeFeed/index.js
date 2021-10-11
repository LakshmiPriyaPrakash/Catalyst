import React from 'react';
import { useSelector } from 'react-redux';
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
                            <li key={story.id}>
                                <p>{story.User.name}</p>
                                <img id="feed-img" src={story.imageUrl} alt="story"/>
                                <h3>{story.title}</h3>
                                <h5>{story.subtitle}</h5>
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
