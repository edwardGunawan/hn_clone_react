import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowContainer from './ShowContainer';

configure({ adapter: new Adapter() });

describe('Show Container Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ShowContainer />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
