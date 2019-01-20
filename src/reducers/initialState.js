// To create initial state to show others that this is what our store looks like
// when application get bigger it will  be easier to understand
export default {
    topStories: {
        stories: [],
        spinner:false,
    },

    newStories: [],

    details: {
        parent: {},
        comments:{},
    },
    commentLists : {}, // normalized the commentLists
    comments:[],
    
    
}