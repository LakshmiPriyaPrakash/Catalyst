import { csrfFetch } from './csrf';

const LOAD = "stories/LOAD";


const load = (stories) => ({
    type: LOAD,
    stories,
});


export const getStories = () => async (dispatch) => {
    const response = await csrfFetch(`/api/stories`);

    if (response.ok) {
      const stories = await response.json();
      dispatch(load(stories));
    }
};

export const createStory = (newStory) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStory),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getStories());
    return data;
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

const initialState = {};


const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
        const allStories = {};
        action.stories.forEach((story) => {
          allStories[story.id] = story;
        });
        return allStories;
      }
    default:
      return state;
  }
};

export default storiesReducer;
