import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import CommentList from './CommentList';

describe('CommentList Component', () => {
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<CommentList />);
    });

    it ('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
})