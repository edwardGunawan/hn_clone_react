import { combineReducers } from 'redux';
import topStories from './topStoriesReducers';

const rootReducer = combineReducers({
    topStories
});

export default rootReducer;