import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Show from './Show';

configure({ adapter: new Adapter() });

describe('Show Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Show />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
