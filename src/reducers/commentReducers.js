import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentReducers(state=initialState.comments, action) {
    switch(action.type) {
        case types.FETCH_COMMENTS_SUCCESS:
            return [...action.comments];
        default:
            return state;
    }
}