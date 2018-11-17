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

}


export default NewStoryApi;