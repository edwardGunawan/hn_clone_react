import NewStoryApi from '../api/mockNewStoriesApi';
import * as types from './actionTypes';

export function fetchSpecificStory(id) {
    return async (dispatch) => {
        try {
            const obj = await NewStoryApi.getContentId(id);
            const numIndent = await NewStoryApi.getParentCount(obj);
            console.log(obj, numIndent);
            dispatch(fetchSpecificStorySuccess({obj, numIndent}));    
        } catch (e) {
            throw(e);
        }
        
            // .then((obj) => {
            //     return NewStoryApi.getParentCount(obj)
            //     // console.log('in item.js in then getContentId function', details);
            // })
            // .then((numIndent) => {
            //     dispatch(setNumIndent(numIndent));
            // })
            // .catch(e => console.log('error in fetchSpecificStory ', e));
    }
}


export function toggleExpand() {
    return {type: types.TOGGLE_EXPAND};
}

export function fetchSpecificStorySuccess(details) {
    return { type: types.FETCH_SPECIFIC_COMMENT_LIST, details};
}

export function setNumIndent(numIndent) {
    return { type: types.SET_NUM_INDENT, numIndent};
}