import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TopContainer} from './TopContainer';
import Lists from './Lists';
import {stories} from './api/mockNewStoriesApi';

// console.log(stories);
configure({adapter: new Adapter()});

describe('Top Container Component', () => {
    let wrapper;
    let fetchTopStories;
    beforeEach(() => {
        fetchTopStories = jest.spyOn(TopContainer.prototype, 'fetchTopStories');
        wrapper = shallow(<TopContainer/>);
    })
    it ('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should container Lists Component', () => {
        expect(wrapper.containsMatchingElement(<Lists news={wrapper.state('stories')}/>)).toEqual(true);
    });

    it('fetchTopStories should be when componentInitially mount', () => {
        expect(fetchTopStories).toHaveBeenCalled();
    });

    afterEach(() => {
        fetchTopStories.mockClear();
    })
})