import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Jobs from './Jobs';

configure({ adapter: new Adapter() });

describe('Jobs Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Jobs />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
