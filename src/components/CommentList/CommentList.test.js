import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CommentList} from './CommentList';
import Comment from '../Comment/Comment';

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
                fetchSpecificItem: (kid) => { return Promise.resolve() },
                ...props,
            }
    }
}

function createWrapper(props, fn) {
    return fn(<CommentList {...props} />);
}

describe('CommentList Component', () => {
    let wrapper;
    // let fetchSpecificItemMock;
    let props;
    const mockKids = [18263752,
        18263612,
        18264551,
        18263667,
        18265641,
        18263818,]

    beforeEach(()=> {
        props = createTestProps({obj: {
            by: '',
            id: 0,
            kids: [],
            parent: 0,
            text: '',
            time: 0,
            type: '',
        }});
        // fetchSpecificItemMock = jest.spyOn(CommentList.prototype, 'fetchSpecificItem');
        wrapper = createWrapper(props,shallow);
    });

    describe('initialState', () => {
        it('should have state of obj', () => {
            expect(wrapper.state().obj).toEqual({
                by: '',
                id: 0,
                kids: [],
                parent: 0,
                text: '',
                time: 0,
                type: '',
            });
        });

        it('should contain isExpand of true', () => {
            expect(wrapper.state().isExpand).toEqual(true);
        })
    })

    describe('rendering', () => {
        it('renders 1 wrapper', () => {
            expect(wrapper.length).toEqual(1);
        });
        // it('calls fetchSpecificItemMock function on componentDidMount', () => {
        //     expect(fetchSpecificItemMock).toHaveBeenCalled();
        // });
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

    describe('Comment has no kids anymore or kids is undefined', () => {
        it('should not render ItemList Component', () => {
            wrapper.setState({
                details: {
                    ...wrapper.state('details'),
                    kids: []
                }
            });
            expect(wrapper.find('ItemList')).toHaveLength(0);
        });
    });

    describe('Expandable button', () => {
        describe('when comment does\'t have any children', () => {
            it('should not show expand button', () => {
                expect(wrapper.find('span')).toHaveLength(0);
            });
        });

        describe('When comment have some sub-comment, that comment', () => {
            beforeEach(() => {
                wrapper.setState({
                    obj: {
                        ...wrapper.state('obj'),
                        type: 'comment',
                        kids: mockKids,
                    },
                });
            });
            it('should show expand button', () => {
                expect(wrapper.find('span')).toHaveLength(1);
            })
        })

        describe('clicking expandable button', () => {
            describe('when user click [+] button', () => {
                beforeEach(() => {
                    wrapper.setState({
                        obj: {
                            ...wrapper.state('obj'),
                            type: 'comment',
                            kids: mockKids,
                        },
                        isExpand: false,
                    });
                    wrapper.find('span').simulate('click');
                });
                it('should show ItemList', () => {
                    expect(wrapper.find('ItemList')).toHaveLength(1);
                });
            });
            describe('when user click [-] button', () => {
                beforeEach(() => {
                    wrapper.setState({
                        obj: {
                            ...wrapper.state('obj'),
                            type: 'comment',
                            kids: mockKids,
                        },
                        isExpand: true,
                    });
                    wrapper.find('span').simulate('click');
                });

                it('should not show ItemList', () => {
                    expect(wrapper.find('ItemList')).toHaveLength(0);
                });
            });
        });
    });

    describe('handleToggleExpand button', () => {
        let handleToggleExpand;


        describe('when call handleToggleExpand', () => {
            beforeEach(() => {
                handleToggleExpand = wrapper.instance().handleToggleExpand;
                wrapper.setState({ isExpand: false });
            });
            it('should toggle isExpand from false to true', () => {
                handleToggleExpand();
                expect(wrapper.state().isExpand).toEqual(true);
            });

            describe('when calling handleToggleExpand twice', () => {
                it('should toggle isExpand from false to true to false', () => {
                    handleToggleExpand(); // call once
                    handleToggleExpand(); // call twice

                    expect(wrapper.state().isExpand).toEqual(false);
                });
            })
        })
    })

    // afterAll(() => {
    //     fetchSpecificItemMock.mockClear();
    // });

});

