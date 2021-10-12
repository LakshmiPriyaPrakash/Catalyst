import React, { useState } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import './WriteStory.css'

function WriteStory() {
    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [imageurl, setImageUrl] = useState("");
    const [body, setBody] = useState("");

    if(sessionUser) {
        return (
            <>
                <form id="story-form">
                <h2>Write a Story</h2>
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
                    value={imageurl}
                    placeholder="Add an image..."
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    />
                </label>
                <label className="ws-form-field">
                    Content
                    <textarea
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
        <Redirect to='/' />
    }
}



export default WriteStory;
