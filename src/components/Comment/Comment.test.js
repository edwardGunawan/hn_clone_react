import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from './Comment';

configure({ adapter: new Adapter() });

function createTestProps(props) {
    return {
        obj: {
            by: "norvig",
            id: 1,
            parent: 2,
            text: "Dummy text",
            time: 1314211127,
        },
        // allow override common props
        ...props,
    }
}

describe('Comment Container', () => {
    let wrapper;
    let props;

    const createWrapper = (props,fn) => fn(<Comment {...props}/>);

    beforeEach(() => {
        props = createTestProps();
        wrapper = createWrapper(props, shallow);

    });

    describe('renders', () => {
        it('should render 2 div, one outer and one on the text section', () => {
            expect(wrapper.find('div').length).toEqual(2);
        });
    })

    // it('should match snapshot', () => {
    //     expect(wrapper).toMatchSnapshot();
    // })
});

// set integration test here