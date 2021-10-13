import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './StoryDetails.css';

function StoryDetail() {
    const { storyId } = useParams();
    const story = useSelector(state => state.stories[storyId]);
    if(story) {
        let d = new Date(story.createdAt);
        let dateWritten = d.toString().slice(4, 10)

        return (
            <>
                <div id="story-details">
                    <p className="story-elements">{story.User.name}</p>
                    <p className="story-elements">{dateWritten}</p>
                    <h2 className="story-elements">{story.title}</h2>
                    <h5 className="story-elements">{story.subtitle}</h5>
                    <img id="sd-img"src={story.imageUrl} alt="story"/>
                    <p className="story-elements">{story.body}</p>
                    <button id="comments-btn" type="submit">Comments</button>
                </div>
            </>
        )
    } else {
        return null;
    }

}


export default StoryDetail;
