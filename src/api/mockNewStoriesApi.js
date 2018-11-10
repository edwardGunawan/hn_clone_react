import delay from './delay';
import { defaultCipherList } from 'constants';

export const storiesId = [1,2,3,4,5,6,7]

export const stories = [
        {
        "by": "dhouston",
        "descendants": 71,
        "id": 8863,
        "kids": [8952],
        "score": 111,
        "time": 1175714200,
        "title": "My YC app: Dropbox - Throw away your USB drive",
        "type": "story",
        "url": "http://www.getdropbox.com/u/2/screencast.html"
    },
    {
        by: "buovjaga",
        descendants: 9,
        id: 18264901,
        kids: [
            18265439,
            18265884,
            18265525,
            18265532,
            18265398
        ],
        score: 90,
        time: 1540062929,
        title: "Arcan versus Xorg – Approaching Feature Parity",
        type: "story",
        url: "https://arcan-fe.com/2018/10/17/arcan-versus-xorg-approaching-feature-parity/"
    },
    {
        by: "njn",
        descendants: 14,
        id: 18265355,
        kids: [
            18265911,
            18265818,
            18265830,
            18265602
        ],
        score: 28,
        time: 1540068283,
        title: "Understanding Quaternions",
        type: "story",
        url: "https://www.3dgep.com/understanding-quaternions/"
    },
    {
        by: "starbugs",
        descendants: 63,
        id: 18263407,
        kids: [
            18263752,
            18263612,
            18264551,
            18263667,
            18265641,
            18263818,
            18263500,
            18264301,
            18264572,
            18263530,
            18264935
        ],
        score: 157,
        time: 1540045338,
        title: "Mio – Cross-platform header-only C++11 library for memory-mapped file IO",
        type: "story",
        url: "https://github.com/mandreyel/mio"
    },
    {
        by: "AlanTuring",
        descendants: 6,
        id: 18264821,
        kids: [
            18265606,
            18265919,
            18265579
        ],
        score: 50,
        time: 1540061622,
        title: "MIT AGI: Conversation with Yoshua Bengio [video]",
        type: "story",
        url: "https://www.youtube.com/watch?v=azOmzumh0vQ"
    },
    {
        by: "rmason",
        descendants: 3,
        id: 18265108,
        kids: [
            18265205,
            18265582,
            18265307
        ],
        score: 35,
        time: 1540065582,
        title: "Raster Vision: A New Framework for Deep Learning on Satellite and Aerial Imagery",
        type: "story",
        url: "https://www.azavea.com/blog/2018/10/18/raster-vision-release/"
    }
]

const comments = [
    {
        by: "nickb",
        id: 8952,
        kids: [
            9153
        ],
        parent: 8863,
        text: `The only problem is that you have to install something. See, it's not the same as USB drive. Most corporate laptops are locked and you can't install anything on them. 
        That's gonna be the problem. Also, another point where your USB comparison fails is that USB works in places where you don't have internet access. <p>My suggestion is to drop 
        the 'Throw away your USB drive' tag line and use something else... it will just muddy your vision.<p>Kudos for launching it!!! Launching/shipping is extremely hard and you pulled it off! Super!`,
        time: 1175727286,
        type: "comment"
    },
    {
        by: "vlad",
        id: 9153,
        kids: [
            9235
        ],
        parent: 8952,
        text: `What about this on the download page (also good for a press release.)<p>Drop Box: Automatically safeguards even your biggest worries, so you don't have any!<p>What is a Drop 
        Box?<p>Your Drop Box is a File Cabinet that Follows You Around Everywhere You Want to Go, Across Your Computers, or Across The Country.<p>Download and start using it today. 
        (link goes here.)<p>Your Drop Box includes your own Secretary who Files and Photocopies Every Document You Make or Edit, So You Can See What Each Document Looked Like Yesterday, Two 
        Days Ago, or at Any Point In Time. Did I Mention the Secretary and the File Cabinet are Fire-Proof and Wireless?<p>But, it's all digital. And, it's secure. And it's built to work between 
        as many Windows desktops or laptop computer you use at NO EXTRA COST! See for yourself! (another link to the download.)<p>Or, access your files at work from a web-based interface! It's so 
        flexible!<p>Q: Do I have to change how I work?<p>A: Absolutely not. Any file and folder (Word documents, spreadsheets, family photos, etc) you add to your Drop Box folder is automatically 
        synchronized and saved remotely.<p>Q: What is the Drop Box folder?<p>A: It's just a special folder which will appear on your computer. Anything added to it is automatically saved, synchronized, 
        and "dated" so you can go back in time!<p>Try it now! (another download link) It's safe, it's free, and you can use it on as many computers to share, backup, and keep archived file versions on, as you need to,
         by registering for just one account!`,
        time: 1175773721,
        type: "comment"
    },
    {
        by: "JMiao",
        id: 9235,
        parent: 9153,
        text: `Your Drop Box is a File Cabinet that Follows You Around Everywhere You Want to Go, Across Your Computers, or Across The Country."<p>Ladies & Gentlemen, the WORLD\'S LIGHTEST FILE CABINET. 
        Great for cross-country roadtrips! =)`,
        time: 1175788206,
        type: "comment"
    }

]

let commentId =0;
let storyId = 0;

class NewStoryApi {

    static async getAllStories(category) {
        // console.log('getAllStories is called');
        try {
            const storiesIdPromise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(storiesId)
                }, delay);
            });

            // const stories = await prom();
            // mocking return all stories
            return storiesIdPromise;
        } catch(e) {
            console.log('error  in newStory Api', e );
        }
        
    }
    
    static async getContentId(id, type) {
        if(storyId >= stories.length) {
            storyId = 0;    
        }
        if(commentId >= comments.length) {
            commentId = 0;
        }
        switch(type) {
            case 'story':
                return this.getStoryId(storyId++);
            default:
                return this.getComment(commentId++);
        }
    }

    static async getStoryId(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(stories[id]);
        }, delay));
    }

    static async getComment(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(comments[id]);
        }));
    }

    static async getItems(ids) {
        await Promise.all(ids.map(async (id) => {
            return this.getStoryId(id);
        }));

        return stories;
    }
}


export default NewStoryApi;