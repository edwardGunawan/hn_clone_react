import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

// this will call dispatch(loadStories());
export function loadStories() {
    return dispatch => {
        dispatch(startRequest());
        return NewStoryApi.get('topstories')
            .then((storiesId) => {
                return NewStoryApi.getItems(storiesId);
            }, e => console.log('An Error Occured', e)).then((stories) => {
                dispatch(loadStoriesSuccess(stories));
            });
    }
}


export function startRequest() {
    return {type: types.START_REQUEST};
}


export function loadStoriesSuccess(stories) {
    return { type: types.LOAD_STORIES_SUCCESS, stories};
}
