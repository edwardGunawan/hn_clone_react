import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function fetchSpecificStory(id) {
    return async (dispatch) => {
        try {
            const obj = await NewStoryApi.getContentId(id);
            const numIndent = await NewStoryApi.getParentCount(obj);
            dispatch(fetchSpecificStorySuccess({obj, numIndent}));    
        } catch (e) {
            throw(e);
        }
    }
}




export function fetchSpecificStorySuccess(details) {
    return { type: types.FETCH_SPECIFIC_COMMENT_LIST, details};
}

