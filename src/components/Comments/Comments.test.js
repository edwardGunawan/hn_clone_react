import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Comments from './Comments';
import itemReducers from '../../reducers/itemReducers';

configure({adapter: new Adapter()});

function createTestProps(props) {
    return {
        comment: require('../../api/mockHNAPI/18595951.json'),
        ...props,
    }
}

describe('Comments Component', () => {
    let props;
    let wrapper;
    describe('renders', () => {
        beforeEach(() => {
            props = createTestProps();
            wrapper = shallow(<Comments {...props} />);
        });

        it('should renders', () => {
            expect(wrapper.find('Fragment').length).toEqual(1);
        });
        
        // snapshot test here
    });

    
})