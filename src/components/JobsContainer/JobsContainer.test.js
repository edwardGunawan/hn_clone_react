import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import JobsContainer from './JobsContainer';

configure({ adapter: new Adapter() });

describe('Jobs Container Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<JobsContainer />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
