import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ItemList from './ItemList';
import CommentList from './CommentList';


describe('ItemList component', () => {
    let wrapper;
    const mockKidsProps = [18263752,
        18263612,
        18264551,
        18263667,
        18265641,
        18263818,];

    beforeEach(() => {
        wrapper = shallow(<ItemList kids={mockKidsProps}/>);
    });


    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain 6 CommentList', () => {
        expect(wrapper.find('CommentList')).toHaveLength(6);
    })

    it('should contains CommentList Component', () => {
        expect(wrapper.containsMatchingElement(<CommentList kid={mockKidsProps[0]}/>)).toEqual(true);
    });

    //TODO : snapshot test
})