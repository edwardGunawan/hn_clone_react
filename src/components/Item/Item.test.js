import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Item } from './Item';

configure({ adapter: new Adapter() });

describe('Item Component', () => {
    let wrapper;
    let props;
    function createTestProps(props) {
        return {
            history: {
                location: {
                    hash: "",
                    key: "w403nf",
                    pathname: "/item",
                    search: "?id=8863",
                    state: undefined,
                },
            },
            ...props,
        }
    }
    const createWrapper = (props,fn) => fn(<Item {...props}/>)
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
        props = createTestProps();
        wrapper = createWrapper(props,shallow);
    });

    describe('initialState', () => {
        it('should have details object', () => {
            expect(wrapper.state().details).toEqual({
                by: '',
                descendants: 0,
                kids: [],
                parent: 0,
                time: 0,
                title: '',
                text: '',
                type: '',
                score: 0,
                url: '',
                id: 0,
            });
        });

    });

    it('should called the fetchSpecificStoryMock function', () => {
        expect(fetchSpecificStoryMock).toHaveBeenCalled();
    });
    
    describe('renders', () => {
        it('should render Titles component as Title if the component is not a comment type', () => {
            wrapper.setState({
                details: {
                    ...wrapper.state('details'),
                    type: 'story',
                }
            });
            expect(wrapper.find('Title')).toHaveLength(1);
            expect(wrapper.find('Comment')).toHaveLength(0);
        })

        it('should render Comment component if the component is a comment type', () => {
            wrapper.setState({
                details: {
                    ...wrapper.state('details'),
                    type: 'comment'
                }
            });
            expect(wrapper.find('Title')).toHaveLength(0);
            expect(wrapper.find('Comment')).toHaveLength(1);
        });

    });

    afterEach(() => {
        fetchSpecificStoryMock.mockClear();
    })
})