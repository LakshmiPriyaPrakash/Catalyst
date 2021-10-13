import { csrfFetch } from './csrf';

const LOAD_STORY = "stories/LOAD";
const ADD_STORY = "stories/ADD_STORY";


const loadStory = (stories) => ({
    type: LOAD_STORY,
    stories,
});

const addOneStory = (newStory) => ({
  type: ADD_STORY,
  newStory,
});



export const getStories = () => async (dispatch) => {
    const response = await csrfFetch(`/api/stories`);

    if (response.ok) {
      const stories = await response.json();
      dispatch(loadStory(stories));
    }
};

export const createStory = (newStory) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStory),
  });

  if (response.ok) {
    const newStory = await response.json();
    dispatch(addOneStory(newStory));
    return newStory;
  }
};

export const updateStory = (updateStory) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${updateStory.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateStory),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getStories());
    return data;
  }
};

export const deleteStory = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/delete/${storyId}`, {
    method: "DELETE"
  });

  await response.json();

  if (response.message === "Success") {
    // const data = await response.json();

    dispatch(getStories());
    // return data;
  }
};

const initialState = {};


const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STORY: {
        const newState = {};
        action.stories.forEach((story) => {
          newState[story.id] = story;
        });
        return newState;
    }
    case ADD_STORY:{
        const newState = {...state}
        newState[action.newStory.id] = {...action.newStory}
        return newState;
    }
    default:
      return state;
  }
};

export default storiesReducer;
