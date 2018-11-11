import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './CommentList';
import Comment from './Comment';

configure({adapter: new Adapter()});



function createTestProps(props={}, name) {
    switch(name) {
        case 'comment':
            return {
                obj : {
                    by: '',
                    id: 0,
                    kids: [],
                    parent: 0,
                    text: '',
                    time: 0,
                    type: '',
                },
                // allow override common props
                ...props,
                }
        default:
            return {
                kid: 18263752,
            }
    }
}

function createWrapper(props, fn) {
    return fn(<CommentList {...props} />);
}

describe('CommentList Component', () => {
    let wrapper;
    let fetchSpecificItemMock;
    let props;
    const mockKids = [18263752,
        18263612,
        18264551,
        18263667,
        18265641,
        18263818,]

    beforeEach(()=> {
        props = createTestProps();
        fetchSpecificItemMock = jest.spyOn(CommentList.prototype, 'fetchSpecificItem');
        wrapper = createWrapper(props,shallow);
    });

    describe('rendering', () => {
        it('renders 1 wrapper', () => {
            expect(wrapper.length).toEqual(1);
        });
        it('calls fetchSpecificItemMock function on componentDidMount', () => {
            expect(fetchSpecificItemMock).toHaveBeenCalled();
        });
        it('contains Comment Component', () => {
            const props = createTestProps({}, 'comment');
            const { obj } = props;
            expect(wrapper.containsMatchingElement(<Comment obj={obj} />)).toEqual(true);
        });
    });

    describe('when obj property kids is not empty in fetched item', () => {
        beforeEach(() => {
            wrapper.setState({
                obj: {
                    ...wrapper.state('obj'),
                    kids: mockKids,
                }
            });
        });
        it('contains ItemList Component if kids is not empty', () => {
            expect(wrapper.find('ItemList')).toHaveLength(1);
        });
    });

    describe('when obj property kids is empty in the fetched item', () => {
        beforeEach(() => {
            wrapper.setState({
                obj: {
                    ...wrapper.state('obj'),
                    kids: [],
                }
            });
        })
        it('doesn\'t contain ItemList Component if kids is empty', () => {
            expect(wrapper.find('ItemList')).toHaveLength(0);
        });

    });

    afterAll(() => {
        fetchSpecificItemMock.mockClear();
    });

});

