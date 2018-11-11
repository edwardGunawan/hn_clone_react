import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Item } from './Item';

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
        wrapper.setState({
            details: {
                by: '',
                descendants: 0,
                parent: 0,
                kids: [],
                time: 0,
                title: '',
                text:'',
                type: '',
                score: 0,
                url: '',
                id: 0,
            }
        })
    });

    it('should called the fetchSpecificStoryMock function', () => {
        expect(fetchSpecificStoryMock).toHaveBeenCalled();
    });

    it('should render Titles component as Title if the component is not a comment type', () => {
        wrapper.setState({ details: {
            ...wrapper.state('details'),
            type:'story',
        }});
        expect(wrapper.find('Title')).toHaveLength(1);
        expect(wrapper.find('Comment')).toHaveLength(0);
    })

    it('should render Comment component if the component is a comment type', () => {
        wrapper.setState({ details: {
            ...wrapper.state('details'),
            type:'comment'
        }});
        expect(wrapper.find('Title')).toHaveLength(0);
        expect(wrapper.find('Comment')).toHaveLength(1);
    });

    describe('Comment has not kids anymore or kids is undefined', () => {
        it('should not render ItemList Component', () => {
            wrapper.setState({
                details: {
                    ...wrapper.state('details'),
                    kids:[]
                }
            });
            expect(wrapper.find('ItemList')).toHaveLength(0);
        });
    })

    afterEach(() => {
        fetchSpecificStoryMock.mockClear();
    })
})