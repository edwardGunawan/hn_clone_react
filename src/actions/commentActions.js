import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function fetchAllComments() {
    return async (dispatch) => {
        try {
            const comments = await NewStoryApi.getNewestComment();
            dispatch(fetchAllCommentsSuccess(comments));
        } catch (e) {
            throw (e);
        }
    }
}


export function fetchAllCommentsSuccess(comments) {
    return {type: types.FETCH_COMMENTS_SUCCESS, comments};
 }