import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ItemList from './ItemList';
import CommentList from './CommentList';
import Statement from './Statement';


describe('ItemList component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ItemList/>);
    })


    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contains Statement Component and ItemList Component', () => {
        expect(wrapper.containsMatchingElement(<Statement />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<CommentList />)).toEqual(true);
    })
})