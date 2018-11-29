import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TopContainer} from '../TopContainer/TopContainer';
import Lists from '../Lists/Lists';

// console.log(stories);
configure({adapter: new Adapter()});

function createTestProps(props) {
    return {
        topStories : {
            stories: [
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
                ],
            spinner: true,
        },
        ...props,
    }
}

describe('Top Container Component', () => {
    let wrapper;
    let props;
    // let fetchTopStories;
    beforeEach(() => {
        props = createTestProps();
        // fetchTopStories = jest.spyOn(TopContainer.prototype, 'fetchTopStories');
        wrapper = shallow(<TopContainer {...props}/>);
    })
    it ('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should container Lists Component', () => {
        expect(wrapper.containsMatchingElement(<Lists news={wrapper.state().stories}/>)).toEqual(true);
    });

    // it('fetchTopStories should be when componentInitially mount', () => {
    //     expect(fetchTopStories).toHaveBeenCalled();
    // });

    // afterEach(() => {
    //     fetchTopStories.mockClear();
    // })
})