import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentContainer from './CommentContainer';

configure({adapter: new Adapter()});

describe('Comment Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CommentContainer />);
    });

    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
})
