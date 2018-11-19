import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function commentListReducers(state = initialState.commentLists, action) {
    switch(action.type) {
        case types.FETCH_SPECIFIC_COMMENT_LIST:
            return [
                ...state,
                Object.assign({},{...action.details}), // NOTE: This needs to normalized
                
            ]
        // case types.SET_NUM_INDENT:
        //     return Object.assign({},state,{
        //         numIndent: action.numIndent,
        //     });
        // case types.TOGGLE_EXPAND:
        //     return Object.assign({}, state, {
        //         isExpand: !state.isExpand,
        //     });
        default:
            return state;
    }
    
}