import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStory } from "../../store/stories";
import { useHistory } from 'react-router-dom';
import './WriteStory.css'


function WriteStory() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [image, setImage] = useState(null);
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authorId = sessionUser.id;

        const newStory = {
            authorId,
            title,
            subtitle,
            image,
            body
        };

        return dispatch(createStory(newStory))
                .then((createdStory)=> history.push(`/stories/${createdStory.id}`))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

      };

      if(sessionUser) {
        return (
            <>
                <div className="story-form-container">
                        <form className="story-form" onSubmit={handleSubmit}>
                        <h2 className="ws-title">Write a Story</h2>
                        <ul className="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                            <label htmlFor="title">Title</label>
                                <input
                                className="sf-input"
                                id="title"
                                type="text"
                                value={title}
                                placeholder="Add a title..."
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                autoFocus={true}
                                />
                        </div>
                        <div className="ws-form-field">
                            <label htmlFor="story-subtitle">Subtitle</label>
                                <input
                                className="sf-input"
                                id="story-subtitle"
                                type="text"
                                value={subtitle}
                                placeholder="Add a subtitle..."
                                onChange={(e) => setSubtitle(e.target.value)}
                                required
                                />
                        </div>
                        <div className="ws-form-field">
                            <label> Add Image </label>
                                <input
                                    className="sf-input"
                                    type="file"
                                    onChange={updateFile}
                                />
                        </div>
                        <div className="ws-form-field">
                            <label htmlFor="content">Content</label>
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
                        <button className="ws-button" type="submit">Submit</button>
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



export default WriteStory;
