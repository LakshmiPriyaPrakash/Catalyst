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
                    <div className="story-form-container">
                        <form className="story-form" onSubmit={handleSubmit} >
                        <h2 className="ws-title">Edit your Story</h2>
                        <ul id="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                            <label for="title">Title</label>
                                <input
                                className="sf-input"
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                autoFocus={true}
                                />
                        </div>
                        <div className="ws-form-field">
                            <label for="subtitle">Subtitle</label>
                                <input
                                className="sf-input"
                                id="subtitle"
                                type="text"
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                required
                                />
                        </div>
                        <div className="ws-form-field">
                            <label for="image">Image URL</label>
                                <input
                                className="sf-input"
                                id="image"
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                                />
                        </div>
                        <div className="ws-form-field">
                            <label for="content">Content</label>
                                <textarea
                                className="sf-content"
                                id="content"
                                rows="15"
                                cols="70"
                                value={body}
                                placeholder="write your story..."
                                onChange={(e) => setBody(e.target.value)}
                                required
                                />
                        </div>
                        <button className="ws-button" type="submit">Update</button>
                        </form>
                    </div>
                </>
            );
    } else {
        return (
            history.push("/")
        );
    }
}


export default EditStory;
