import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import CommentList from './CommentList';
import Comment from './Comment';
import ItemList from './ItemList';

describe('CommentList Component', () => {
    let wrapper;
    let fetchSpecificItemMock;
    const props = {
        kid: 18263752,
    }
    const mockKids = [18263752,
        18263612,
        18264551,
        18263667,
        18265641,
        18263818,]

    beforeEach(()=> {
        fetchSpecificItemMock = jest.spyOn(CommentList.prototype, 'fetchSpecificItem');
        wrapper = shallow(<CommentList {...props}/>);
    });

    it ('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should call fetchSpecificItemMock function on componentDidMount', () => {
        expect(fetchSpecificItemMock).toHaveBeenCalled();
    });

    it('should contain Comment Component', () => {
        expect(wrapper.containsMatchingElement(<Comment />)).toEqual(true);
    });

    it('should contain ItemList Component if kids is not empty', () => {
        wrapper.setState({kids:mockKids});
        expect(wrapper.find('ItemList')).toHaveLength(1);
    });

    it('should not contain ItemList Component if kids is empty', () => {
        wrapper.setState({ kids: [] });
        expect(wrapper.find('ItemList')).toHaveLength(0);
    });

    afterAll(() => {
        fetchSpecificItemMock.mockClear();
    })

});