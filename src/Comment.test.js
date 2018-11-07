import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from './Comment';

configure({ adapter: new Adapter() });

describe('Comment Container', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Comment/>);
    })

    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
})