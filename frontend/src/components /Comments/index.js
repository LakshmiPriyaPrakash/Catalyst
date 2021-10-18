import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaRegUserCircle } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
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
    let newObj = {};
    for(const comment of commentsArr) {
        newObj[comment.id] = false;
    }

    const [editBody, setEditBody] = useState("");
    const [editErrors, setEditErrors] = useState([]);
    const [showEditBox, setshowEditBox] = useState(false);
    const [showCommentId, setshowCommentId] = useState(null);
    const [showEditBoxArr, setEditBoxArr] = useState(newObj);


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
        setshowCommentId(null)

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
                <h3 className="comments-title">Comments</h3>
                {!sessionUser &&
                    <h5 className="comments-subtitle">Log in / sign up to submit, edit, or delete a comment!</h5>
                }
                {sessionUser &&
                    <div>
                        <form id="comments-form" onSubmit={handleSubmit}>
                            <ul id="ws-errors">
                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>
                            <label >
                                <textarea
                                className="ic-field"
                                rows="7"
                                cols="40"
                                value={body}
                                placeholder="Add a comment..."
                                onChange={(e) => setBody(e.target.value)}
                                required
                                />
                            </label>
                            <button className="wc-button" type="submit">Submit</button>
                            <span className="clear" onClick={() => setBody("")}>
                                Clear
                            </span>
                        </form>

                    </div>
                }
                <div id="comments-div">
                    <ul>
                    {storyComments.map(comment => {
                        let d = new Date(comment.createdAt);
                        let dateWritten = d.toString().slice(4, 10);
                        return (
                        <li key={comment.id} className="comments-list">
                            {!showEditBoxArr[comment.id] &&
                                <div id={comment.id}>
                                    <p className="user-name"><FaRegUserCircle /> {comment.User.name}</p>
                                    <p className="date-written">{dateWritten}</p>
                                    <p id="cmt-bdy">{comment.body}</p>

                                    {sessionUser && (sessionUser.id === comment.userId) &&
                                        <button className="ed-button" type="submit"
                                        onClick={() => {
                                            setshowEditBox(true)
                                            setshowCommentId(comment.id)
                                            setEditBody(comment.body)
                                            let newobj = {...newObj}
                                            newobj[comment.id] = true;
                                            setEditBoxArr(newobj)
                                            }
                                        }>
                                            <FaEdit />
                                        </button>
                                    }
                                    {sessionUser && (sessionUser.id === comment.userId || sessionUser.id === story.authorId) &&
                                        <button className="ed-button" type="submit" onClick={() => dispatch(deleteComment(comment.id))}>
                                            <RiDeleteBin5Line />
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
                                    <label >
                                        <textarea
                                        className="ic-field"
                                        rows="5"
                                        cols="30"
                                        value={editBody}
                                        onChange={(e) => setEditBody(e.target.value)}
                                        required
                                        />
                                    </label>
                                    <button className="sc-button" type="submit" onClick={() => {
                                        let newobj = {...newObj}
                                        newobj[comment.id] = false;
                                        setEditBoxArr(newobj)
                                    }}>
                                        Save
                                    </button>
                                    <span className="clear" onClick={() => {
                                        setshowEditBox(false)
                                        setshowCommentId(null)
                                        let newobj = {...newObj}
                                        newobj[comment.id] = false;
                                        setEditBoxArr(newobj)
                                        }
                                    }>
                                        Cancel
                                    </span>
                                </form>
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
