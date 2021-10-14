import { csrfFetch } from './csrf';

const LOAD_COMMENTS = "comments/LOAD";
const ADD_COMMENT = "comments/ADD_COMMENT";

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
});

const addOneComment = (newComment) => ({
  type: ADD_COMMENT,
  newComment,
});


export const getComments = () => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`);

    if (response.ok) {
      const comments = await response.json();
      dispatch(loadComments(comments));
    }
};

export const createComment = (newComment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });

  if (response.ok) {
    const newComment = await response.json();
    dispatch(addOneComment(newComment));
    return newComment;
  }
};


const initialState = {};


const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
        const newState = {};
        action.comments.forEach((comment) => {
          newState[comment.id] = comment;
        });
        return newState;
    }
    case ADD_COMMENT:{
        const newState = {...state}
        newState[action.newComment.id] = {...action.newComment}
        return newState;
    }
    default:
    return state;
    }
};

export default commentsReducer;
