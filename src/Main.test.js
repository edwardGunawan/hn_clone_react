import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import {Main} from './Main';
import NewContainer from './NewContainer';
import CommentContainer from './CommentContainer';
import ShowContainer from './ShowContainer';
import AskContainer from './AskContainer';
import JobsContainer from './JobsContainer';
import Item from './Item';

configure({adapter: new Adapter()});

describe('Testing Main Component Router', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Main />)
    });

    it("should have 6 Routes", () => {
        expect(wrapper.find("Route")).toHaveLength(6);
    });

    it('routes /new to New Container Component', () =>{
        expect(wrapper.find("Route").first().prop('component')).toBe(NewContainer);
    });

    it('routes /item to New Container Container Component', () => {
        expect(wrapper.find("Route").at(1).prop("component")).toBe(Item);
    })

    it('routes /comment to Comment Container Component', () => {
        expect(wrapper.find("Route").at(2).prop("component")).toBe(CommentContainer);
    })

    it('routes /show to Show Container Component', () => {
        expect(wrapper.find("Route").at(3).prop('component')).toBe(ShowContainer);
    })

    it('routes /ask to Ask Container Component', () => {
        expect(wrapper.find("Route").at(4).prop('component')).toBe(AskContainer);
    })

    it('routes /jobs to Jobs Container Component', () => {
        expect(wrapper.find('Route').at(5).prop('component')).toBe(JobsContainer);
    })
})