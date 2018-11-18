import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AskContainer from './AskContainer';

configure({ adapter: new Adapter() });

describe('Ask Container Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AskContainer />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
