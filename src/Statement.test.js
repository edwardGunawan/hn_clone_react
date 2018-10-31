import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()});

import Statement from './Statement';


describe('Statement Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Statement/>);
    })

    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
})