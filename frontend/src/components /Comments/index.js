import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../store/comments";

function ReadComments({storyId}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = sessionUser.id;

        const newComment = {
            userId,
            storyId,
            body
        };

        return dispatch(createComment(newComment))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

      };

    return (
        <>
            <h3>Comments</h3>
            <form id="comments-form" onSubmit={handleSubmit}>
                <ul id="ws-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label className="ws-form-field">
                    <textarea
                    rows="7"
                    cols="40"
                    value={body}
                    placeholder="Add a comment..."
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </label>
                <button id="wc-button" type="submit">Submit</button>
            </form>
        </>
    );
}





export default ReadComments;
