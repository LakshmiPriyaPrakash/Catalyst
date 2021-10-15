import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { updateStory } from "../../store/stories";
import './UpdateStory.css'


function EditStory() {
    const sessionUser = useSelector(state => state.session.user);
    const { editStoryId } = useParams();
    const story = useSelector(state => state.stories[editStoryId]);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState(story.title);
    const [subtitle, setSubtitle] = useState(story.subtitle);
    const [imageUrl, setImageUrl] = useState(story.imageUrl);
    const [body, setBody] = useState(story.body);
    const [errors, setErrors] = useState([]);

    if(sessionUser && story) {

        const handleSubmit = async (e) => {
            e.preventDefault();

            const authorId = sessionUser.id;

            const editedStory = {
                id: editStoryId,
                authorId,
                title,
                subtitle,
                imageUrl,
                body
            };

            return dispatch(updateStory(editedStory))
                .then((updatedStory)=> history.push(`/stories/${updatedStory.id}`))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

        };

            return (
                <>
                    <form id="story-form" onSubmit={handleSubmit} >
                    <h2>Edit your Story</h2>
                    <ul id="us-errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label className="us-form-field">
                        Title
                        <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        />
                    </label>
                    <label className="us-form-field">
                        Subtitle
                        <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        required
                        />
                    </label>
                    <label className="us-form-field">
                        Image URL
                        <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                        />
                    </label>
                    <label className="us-form-field">
                        Content
                        <textarea
                        rows="15"
                        cols="70"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        />
                    </label>
                    <button id="us-button" type="submit">Update</button>
                    </form>
                </>
            );
    } else {
        return (
            history.push("/")
        );
    }
}


export default EditStory;
