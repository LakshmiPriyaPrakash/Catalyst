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
                <p>{story.User.name}</p>
                <p>{dateWritten}</p>
                <h2>{story.title}</h2>
                <h5>{story.subtitle}</h5>
                <img id="sd-img"src={story.imageUrl} alt="story"/>
                <p>{story.body}</p>
            </>
        )
    } else {
        return null;
    }

}


export default StoryDetail;
