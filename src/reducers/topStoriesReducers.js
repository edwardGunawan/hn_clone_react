import * as types from '../actions/actionTypes';

// state = {
//     stories: []
// }
export default function topStoriesReducers(state={stories:[],}, action) {
    switch(action.type) {
        case types.START_REQUEST:
            return {
                ...state,
                spinner: true,
            }
        case types.LOAD_STORIES_SUCCESS:
            return Object.assign({}, {stories: action.stories, spinner:false, })
        default:
            return state;
    }
}