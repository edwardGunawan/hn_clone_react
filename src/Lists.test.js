import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Lists from './Lists';
import NewList from './NewList';

configure({adapter: new Adapter()});

const news = [
    {
        by: "irsina",
        descendants: 17,
        id: 18265074,
        kids: [
            18265466,
            18265435,
            18265196,
            18265226,
            18265502,
            18265313
        ],
        score: 102,
        time: 1540065131,
        title: "Show HN: Lipreading with Deep Learning",
        type: "story",
        url: "https://github.com/astorfi/lip-reading-deeplearning"
    },
    {
        by: "AlanTuring",
        descendants: 8,
        id: 18264821,
        kids: [
            18265606,
            18265579,
            18265919
        ],
        score: 57,
        time: 1540061622,
        title: "MIT AGI: Conversation with Yoshua Bengio [video]",
        type: "story",
        url: "https://www.youtube.com/watch?v=azOmzumh0vQ"
    }
]

describe('Lists Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Lists news ={news} />);
    })

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render 2 NewList Component', () => {
        // console.log(wrapper.children().debug());
        wrapper.forEach((node,i) => {
            const item = news[i];
            const { by, descendants, kids, time, title, type, url } = item;
            expect(node.find('ol').children().containsMatchingElement(
                <NewList by={by}
                         descendants={descendants}
                         kids={kids}
                         time={time}
                         title={title}
                         type={type}
                         url={url}/>
                    )).toEqual(true);
        });
        
        expect(wrapper.find('ol').children().length).toEqual(2);
    })
})