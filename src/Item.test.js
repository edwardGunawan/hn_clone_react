import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Item } from './Item';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Item Component', () => {
    let wrapper;
    let fetchSpecificStoryMock;
    const mockHistory = {
        location: {
            hash:"",
            key: "w403nf",
            pathname: "/item",
            search: "?id=8863",
            state: undefined,
        }
    }

    beforeEach(() => {
        fetchSpecificStoryMock = jest.spyOn(Item.prototype, 'fetchSpecificStory');
        wrapper = shallow(
           <Item history={mockHistory} />
        );
    });

    it('should called the fetchSpecificStoryMock function', () => {
        expect(fetchSpecificStoryMock).toHaveBeenCalled();
    });

    it('should render NewLists component as Title if the component is not a comment type', () => {
        wrapper.setState({ type:'story' })
        expect(wrapper.find('NewList')).toHaveLength(1);
        expect(wrapper.find('ItemList')).toHaveLength(0);
    })

    it('should render ItemList component if the component is a comment type', () => {
        wrapper.setState({
          type:'comment',
        });
        // console.log(wrapper.state());
        expect(wrapper.find('NewList')).toHaveLength(0);
        expect(wrapper.find('ItemList')).toHaveLength(1);
    })

    afterEach(() => {
        wrapper.setState({ by: '',
            descendants: 0,
            kids: [],
            time: 0,
            title: '',
            type: '',
            score: 0,
            url: '',
            id: 0,})
        fetchSpecificStoryMock.mockClear();
    })
})