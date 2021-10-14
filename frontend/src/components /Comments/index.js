import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createComment, updateComment , deleteComment } from "../../store/comments";
import './Comments.css';

function Comments() {
    const { storyId } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const stories = useSelector(state => state.stories);
    const storiesArr = Object.values(stories);
    let story;
    if(sessionUser) {
        story = storiesArr.filter(story => story.authorId === sessionUser.id);
    }


    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const storyComments = commentsArr.filter(comment => comment.storyId === Number(storyId))

    const dispatch = useDispatch();

    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);


    const [editBody, setEditBody] = useState("");
    const [editErrors, setEditErrors] = useState([]);
    const [showEditBox, setshowEditBox] = useState(false);
    const [showComment, setshowComment] = useState(true);
    const [showCommentId, setshowCommentId] = useState(null);


    //handles an edited comment submission
    const handleEdit = async (e) => {
        e.preventDefault();

        const userId = sessionUser.id;

        const editedComment = {
            id: showCommentId,
            userId,
            storyId: Number(storyId),
            body: editBody
        };


        setshowEditBox(false)
        setshowComment(true)
        setshowCommentId(null)

        console.log(editedComment)

        return dispatch(updateComment(editedComment))
                .then(() => {
                    setBody("")
                    setEditErrors([])
                })
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setEditErrors(data.errors);
                });

      };

    //handles new comment submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = sessionUser.id;

        const newComment = {
            userId,
            storyId: Number(storyId),
            body
        };


        return dispatch(createComment(newComment))
                .then(() => setBody(""))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

      };

        return (
            <>
                <h3>Comments</h3>
                {!sessionUser &&
                    <h6>Log in / sign up to submit, edit, or delete a comment!</h6>
                }
                {sessionUser &&
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
                }
                <div>
                    <ul>
                    {storyComments.map(comment => {
                        let d = new Date(comment.createdAt);
                        let dateWritten = d.toString().slice(4, 10);
                        return (
                        <li key={comment.id} id="comments-list">
                            {showComment &&
                                <div>
                                    <p>{comment.User.name}</p>
                                    <p>{dateWritten}</p>
                                    <p>{comment.body}</p>

                                    {sessionUser && (sessionUser.id === comment.userId) &&
                                        <button id="wc-button" type="submit"
                                        onClick={() => {
                                            setshowEditBox(true)
                                            setshowComment(false)
                                            setshowCommentId(comment.id)
                                            setEditBody(comment.body)
                                            }
                                        }>
                                            Edit
                                        </button>
                                    }
                                    {sessionUser && (sessionUser.id === comment.userId || sessionUser.id === story.authorId) &&
                                        <button id="wc-button" type="submit" onClick={() => dispatch(deleteComment(comment.id))}>
                                            Delete
                                        </button>
                                    }
                                </div>
                            }
                            {sessionUser && showEditBox && (showCommentId === comment.id) &&
                                <div>
                                    <form id="comments-form" onSubmit={handleEdit}>
                                    <ul id="ws-errors">
                                        {editErrors.map((error, idx) => <li key={idx}>{error}</li>)}
                                    </ul>
                                    <label className="ws-form-field">
                                        <textarea
                                        rows="7"
                                        cols="40"
                                        value={editBody}
                                        onChange={(e) => setEditBody(e.target.value)}
                                        required
                                        />
                                    </label>
                                    <button id="wc-button" type="submit" >
                                        Save
                                    </button>
                                </form>
                                <button id="wc-button" type="submit" onClick={ () => {
                                    setshowEditBox(false)
                                    setshowComment(true)
                                    setshowCommentId(null)
                                    }
                                }>
                                    Cancel
                                </button>
                            </div>
                        }
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </>
        );
}





export default Comments;
