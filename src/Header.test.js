import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';


import {Header} from './Header';

configure({ adapter: new Adapter() });

describe("Header Component" , () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
    });

    it('should have 5 Link', () => {
        expect(wrapper.find('Link')).toHaveLength(5);
    })
})