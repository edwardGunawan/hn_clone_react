import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Item } from './Item';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Item Component', () => {
    let wrapper;
    let fetchSpecificStoryMock;

    beforeEach(() => {
        fetchSpecificStoryMock = jest.spyOn(Item.prototype, 'fetchSpecificStory');
        wrapper = mount(
            <MemoryRouter initialEntries={["/item"]} initialIndex={0}>
                <Main />
            </MemoryRouter>
        );

    });

    it('should called the fetchSpecificStoryMock function', () => {
        expect(fetchSpecificStoryMock).toHaveBeenCalled();
    });

    it('should render Lists component', () => {
        expect(wrapper.children().children().find('Lists')).toHaveLength(1);
    });

    afterEach(() => {
        fetchSpecificStoryMock.mockClear();
    })
})