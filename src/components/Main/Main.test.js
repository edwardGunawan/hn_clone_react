import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Main} from './Main';

configure({adapter: new Adapter()});

describe('Testing Main Component Router', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Main />)
    });

    it("should render", () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render 8 Route', () => {
        expect(wrapper.find('Route').length).toEqual(8);
    })
})