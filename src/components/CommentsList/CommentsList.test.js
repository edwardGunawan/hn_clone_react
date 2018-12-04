import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentsList from './CommentsList';
import {Comments} from '../Comments/Comments';

import itemReducers from '../../reducers/itemReducers';

configure({adapter: new Adapter()});

function createTestProps(props) {
    return {
        comments: [require('../../api/mockHNApi/18595951.json'),
            require('../../api/mockHNApi/18593901.json')],
        ...props,
    }
}


describe('CommentsList Component', () => {
    let props;
    let wrapper;

    describe('renders', () => {
        beforeEach(() => {
            props = createTestProps();
            wrapper = shallow(<CommentsList {...props}/>);

        });

        it('should renders', () => {
            expect(wrapper.find('ul').length).toEqual(1);
        });

        it('should contain 2 li statement', () => {
            expect(wrapper.find('li').length).toEqual(2);
        });

        it('should contain 2 Comments Component', () => {
            expect(wrapper.containsMatchingElement(<Comments comment={wrapper.props().children[0].props.children.props.comment}/>)).toEqual(true);
        });


    });
});