// To create initial state to show others that this is what our store looks like
// when application get bigger it will  be easier to understand
export default {
    topStories: {
        stories: [],
        spinner:false,
    },

    newStories: [],

    details: {
        by: '',
        descendants: 0,
        kids: [],
        parent: 0,
        time: 0,
        title: '',
        text: '',
        type: '',
        score: 0,
        url: '',
        id: 0,
    },
    commentLists : [{
        obj: {
            by: '',
            id: 0,
            kids: [],
            parent: 0,
            text: '',
            time: 0,
            type: '',
        },
        numIndent: 1,
        isExpand: true,
    },],
    
    
}