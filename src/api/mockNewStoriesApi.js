import delay from './delay';

const storiesId = [1,2,3,4,5,6,7]

const stories = [
        {
        "by": "dhouston",
        "descendants": 71,
        "id": 8863,
        "kids": [8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
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
        by: "manfredo",
        id: 18265075,
        parent: 18264785,
        text: "Yeah, buts tens of thousands of dollars over the course of nearly 2 decades isn&#x27;t all that much money. If your kid takes the bus, goes to public education, and you don&#x27;t need childcare then the cost of a kid just boils down to room and board. Contrast that with a parent that sends their kid to private school, and wants to pay for a private undergrad. That&#x27;s going to be on the order of at least the hundreds of thousands of dollars. Probably close to half a million.<p>Raising a kid to the expectations of an upper or even upper-middle class family costs orders of magnitude more than raising a kid to the expectations of a poor family. But said upper middle class family probably doesn&#x27;t make a proportionally larger amount. I&#x27;d consider someone &quot;poor&quot; if they make 20-25k a year and &quot;wealthy&quot; if they make 200-250k+. But the costs of raising a child to the expectations of the latter is probably more than 10 times greater. Probably 20-30 times greater. Thus why kids are more proportionally expensive for higher income class people.",
        time: 1540065158,
        type: "comment"
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

class NewStoryApi {
    static getNewStory() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(storiesId)
            }, delay);
        })
    }

    static async getAllStories() {
        // console.log('getAllStories is called');
        const ids = await NewStoryApi.getNewStory();
       // mocking return all stories
        return stories;
    }

    static async getStoryId(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve();
        }, delay));
    }
}


export default NewStoryApi;