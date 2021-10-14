import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStory } from "../../store/stories";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router";
import './WriteStory.css'


function WriteStory() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authorId = sessionUser.id;

        const newStory = {
            authorId,
            title,
            subtitle,
            imageUrl,
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
                <form id="story-form" onSubmit={handleSubmit}>
                <h2>Write a Story</h2>
                <ul id="ws-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label className="ws-form-field">
                    Title
                    <input
                    type="text"
                    value={title}
                    placeholder="Add a title..."
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </label>
                <label className="ws-form-field">
                    Subtitle
                    <input
                    type="text"
                    value={subtitle}
                    placeholder="Add a subtitle..."
                    onChange={(e) => setSubtitle(e.target.value)}
                    required
                    />
                </label>
                <label className="ws-form-field">
                    Image URL
                    <input
                    type="text"
                    value={imageUrl}
                    placeholder="Add an image..."
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    />
                </label>
                <label className="ws-form-field">
                    Content
                    <textarea
                    rows="15"
                    cols="70"
                    value={body}
                    placeholder="write your story..."
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </label>
                <button id="ws-button" type="submit">Submit</button>
                </form>
            </>
        );
      } else {
          return (
            <Redirect to="/" />
          );
      }
}



export default WriteStory;
