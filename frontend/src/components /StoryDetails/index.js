import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReadComments from "../Comments";
import './StoryDetails.css';

function StoryDetail() {
    const { storyId } = useParams();
    const story = useSelector(state => state.stories[storyId]);
    const [showComments, setShowComments] = useState(false);

    if(story) {
        let d = new Date(story.createdAt);
        let dateWritten = d.toString().slice(4, 10)

        return (
            <>
                <div id="story-comments">
                    <div id="story-details">
                        <p className="story-elements">{story.User.name}</p>
                        <p className="story-elements">{dateWritten}</p>
                        <h2 className="story-elements">{story.title}</h2>
                        <h5 className="story-elements">{story.subtitle}</h5>
                        <img id="sd-img"src={story.imageUrl} alt="story"/>
                        <p className="story-elements">{story.body}</p>
                        <button id="comments-btn" type="submit" onClick={() => setShowComments(true)}>
                            Comments
                        </button>
                    </div>
                    <div className="sidebar"
                        style={showComments ? { transform: 'translateX(-100%)' }:{}}
                    >
                        <ReadComments />
                        <button type="submit" onClick={() => setShowComments(false)}>close</button>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }

}


export default StoryDetail;
