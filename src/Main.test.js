import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import {Main} from './Main';
import New from './New';
import Comment from './Comment';
import Show from './Show';
import Ask from './Ask';
import Jobs from './Jobs';

configure({adapter: new Adapter()});

describe('Testing Main Component Router', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Main />)
    });

    it("should have 5 Routes", () => {
        expect(wrapper.find("Route")).toHaveLength(5);
    });

    it('routes /new to New Component', () =>{
        expect(wrapper.find("Route").first().prop('component')).toBe(New);
    })

    it('routes /comment to Comment Component', () => {
        expect(wrapper.find("Route").at(1).prop("component")).toBe(Comment);
    })

    it('routes /show to Show Component', () => {
        expect(wrapper.find("Route").at(2).prop('component')).toBe(Show);
    })

    it('routes /ask to Ask Component', () => {
        expect(wrapper.find("Route").at(3).prop('component')).toBe(Ask);
    })

    it('routes /jobs to Jobs Component', () => {
        expect(wrapper.find('Route').at(4).prop('component')).toBe(Jobs);
    })
})