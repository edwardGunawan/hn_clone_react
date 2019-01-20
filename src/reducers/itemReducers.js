import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducers(state = initialState.details, action) {
    switch(action.type) {
        case types.FETCH_SPECIFIC_STORY_SUCCESS:
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
}