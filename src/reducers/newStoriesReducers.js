import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newStoriesReducers(state = initialState.newStories, action) {
    switch(action.type) {
        case types.NEW_STORIES_SUCCESS:
            return [...action.newStories];
        default:
            return state;
    }
}