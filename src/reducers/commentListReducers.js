import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function commentListReducers(state = initialState.commentLists, action) {
    switch(action.type) {
        case types.FETCH_SPECIFIC_COMMENT_LIST:
            const { id } = action.details.obj;
            return {
                ...state,
                [id]: Object.assign({},{...action.details}), 
            }
        default:
            return state;
    }
    
}