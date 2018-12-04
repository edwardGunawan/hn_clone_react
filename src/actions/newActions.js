
import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function loadNewStories() {
    return dispatch => {
        return NewStoryApi.get('newstories')
            .then((ids) => {
                return NewStoryApi.getItems(ids);
            })
            .then((newsItem) => {
                dispatch(loadNewStoriesSucces(newsItem))
            })
            .catch(e => console.log("error in fetchAllStories", e));
    }
}



export function loadNewStoriesSucces(newStories) {
    return { type: types.NEW_STORIES_SUCCESS, newStories};
}

