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