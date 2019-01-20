import delay from './delay';

const folder = './mockHNApi';

class NewStoryApi {

    static async get(category) {
        try {
            const idsPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(require(`${folder}/${category}`));
                }, delay);
            });

            // const stories = await prom();
            // mocking return all stories
            return idsPromise;
        } catch(e) {
            console.log('error  in newStory Api', e );
        }
        
    }
    
    static async getContentId(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(require(`${folder}/${id}.json`));
        },delay));
    }

    static async getParentCount(contentObj) {
        return new Promise(resolve => {
            let {parent} = contentObj;
            let count = 1;
            while (typeof (parent) !== 'undefined' && parent !== null) {
                let parentObj = require(`${folder}/${parent}.json`);
                parent = parentObj['parent'];
                count++;
            }
            resolve(count); 
        })
    }

    static async getItems(ids) {
        return  Promise.all(ids.map(async (id) => {
            return this.getContentId(id);
        }));
    }

    static isComment(contentObject) {
        return contentObject.type === 'comment';
    }

    static async getContentIncludingKids(content) {
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
        }catch (e) {
            throw e;
        }
    }

    static async getNewestComment() {
        try {
            const { items } = await this.get('updates');
            let commentArray = [];
            for (const id of items) {
                let item = await this.getContentId(id)
                if (this.isComment(item)) {
                    commentArray.push(item);
                }
            }
            return commentArray;

        } catch (e) {
            throw new Error(e);
        }

    }

}


export default NewStoryApi;