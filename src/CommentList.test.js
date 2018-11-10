import React from 'react';
import {configure, shallow} from 'enzyme';
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
        wrapper = shallow(<CommentList {...props}/>);
    });

    it ('should render', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('should call fetchSpecificItemMock function on componentDidMount', () => {
        expect(fetchSpecificItemMock).toHaveBeenCalled();
    });

    it('should contain Comment Component', () => {
        const props = createTestProps({},'comment');
        const {obj} = props;
        expect(wrapper.containsMatchingElement(<Comment obj={obj} />)).toEqual(true);
    });

    it('should contain ItemList Component if kids is not empty', () => {
        wrapper.setState({ obj :{
            ...wrapper.state('obj'),
            kids: mockKids,
        }});
        expect(wrapper.find('ItemList')).toHaveLength(1);
    });

    it('should not contain ItemList Component if kids is empty', () => {
        wrapper.setState({ obj: {
            ...wrapper.state('obj'),
            kids: [],
        }});
        expect(wrapper.find('ItemList')).toHaveLength(0);
    });

    afterAll(() => {
        fetchSpecificItemMock.mockClear();
    })

});