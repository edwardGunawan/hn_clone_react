import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from './Comment';

configure({adapter: new Adapter()});

describe('Comment Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Comment />);
    });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    })
})
