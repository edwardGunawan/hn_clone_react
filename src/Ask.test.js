import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Ask from './Ask';

configure({ adapter: new Adapter() });

describe('Ask Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Ask />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
