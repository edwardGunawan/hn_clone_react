export default {
    endPoint: `https://hacker-news.firebaseio.com/v0`,

    options: {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    },

    /**
     *  Get endpoint HackerNews API stories, and return its id
     */
    async get(category) {
        return fetch(`${this.endPoint}/${category}.json/print=pretty`);
    },

    /**
     * 
     * @param {Number} id 
     * Get stories Id HackerNews API stories, and return the function call
     */
    async getContentId(id) {
        return fetch(`${this.endPoint}/item/${id}.json/print=pretty`);
    },

    /**
     * 
     * @param {Object} content 
     * Recursively called all the kids and its kids content until leaf
     */

    async getContentIncludingKids(content) {
        try {
            const { kids = [] } = content;
            if (kids.length === 0) {
                return content;
            }

            let kidsPromise = kids.map((id) => {
                return this.getContentId(id)
            });
            const nestedContent = await Promise.all(kidsPromise);

            let allCalls = [];
            for (let c of nestedContent) {
                // console.log('c inside nestedContent', c);
                allCalls.push(this.getContentIncludingKids(c)); // async itself is a new Promise
            }

            const allNestedKidsContent = await Promise.all(allCalls);
            return Object.assign({}, content, {
                kids: allNestedKidsContent,
            });
        } catch (e) {
            throw e;
        }
    },

    /**
     * 
     * @param {array of Number} ids 
     * Get Items from the array of story child, a list of story ids, anything that incorporate with a list of ids
     */
    async getItems(ids) {
        // let ids run concurrently
        return Promise.all(ids.map(async (id) => {
            return this.getContentId(id);
        }));
    },

    /**
     * 
     * @param {Object} contentObject
     * Count the ancestor of the current object
     */
    async getParentCount(contentObject) {
        let { parent } = contentObject;
        let count = 1;

        while (typeof (parent) !== 'undefined' && parent !== null) {
            let parentObj = await this.getContentId(parent);
            parent = parentObj['parent'];
            count++;
        }

        return count;
    },

    /**
     * @param {Object} contentObject
     * Check if the contentObject is a type comment
     */
    isComment(contentObject) {
        return contentObject.type === 'comment';
    },

    /**
     * @param {} 
     * Get all comments from the topStories
     */
    async getNewestComment() {
        try {
            const { items } = await this.get('updates');
            let commentArray = [];
            for(const id of items) {
                let item = await this.getContentId(id);
                if(this.isComment(item)) {
                    commentArray.push(item);
                }
            }
            return commentArray;

        } catch(e) {
            throw new Error(e);
        }

    }


}
