import { combineReducers } from 'redux';
import topStories from './topStoriesReducers';
import newStories from './newStoriesReducers';
import commentList from './commentListReducers';
import item from './itemReducers';

const rootReducer = combineReducers({
    topStories,
    newStories,
    item,
    commentList,
});

export default rootReducer;