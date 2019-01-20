import NewStoryApi from '../api/mockNewStoriesApi';
import {schema, normalize} from 'normalizr';
import * as types from './actionTypes';


export function fetchSpecificStory(id) {
    console.log(id);
    return dispatch => {
        NewStoryApi.getContentId(id)
            .then((details) => {
                NewStoryApi.getContentIncludingKids(details).then((contents) => {

                    // defining the schema/ relationship between the data
                    // https://stackoverflow.com/questions/41506533/how-to-define-schema-for-recursive-model-with-normalizr
                    const comments = new schema.Entity('comments');
                    const kids = new schema.Array(comments);
                    comments.define({kids});
                    const parent = new schema.Entity('parent', {kids});
                    const normalizedData = normalize(contents,parent);
                    return normalizedData;
                }).then(({entities}) => {
                    dispatch(fetchSpecificStorySuccess(entities));
                });
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }
}



export function fetchSpecificStorySuccess(data) {
    return {type: types.FETCH_SPECIFIC_STORY_SUCCESS, payload: data};
}