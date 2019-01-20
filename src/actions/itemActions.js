import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function fetchSpecificStory(id) {
    return dispatch => {
        NewStoryApi.getContentId(id)
            .then((details) => {
                // console.log('details in itemActions' ,details);
                NewStoryApi.getContentIncludingKids(details).then((contents) => {
                    console.log('end of promise content', contents);
                });
                if (details) dispatch(fetchSpecificStorySuccess(details));
                // console.log('in item.js in then getContentId function', details);
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }
}




export function fetchSpecificStorySuccess(details) {
    return {type: types.FETCH_SPECIFIC_STORY_SUCCESS, details};
}