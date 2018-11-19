import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function fetchSpecificStory(id) {
    return dispatch => {
        NewStoryApi.getContentId(id)
            .then((details) => {
                if (details) dispatch(fetchSpecificStorySuccess(details));
                // console.log('in item.js in then getContentId function', details);
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }
}




export function fetchSpecificStorySuccess(details) {
    return {type: types.FETCH_SPECIFIC_STORY_SUCCESS, details};
}