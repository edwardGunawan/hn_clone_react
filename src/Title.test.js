import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Title } from './Title';

configure({ adapter: new Adapter() });

function createTestProps(props) {
    return {
        obj: {
            by: "irsina",
            descendants: 17,
            id: 18265074,
            kids: [
                18265466,
                18265435,
                18265196,
                18265226,
                18265502,
                18265313
            ],
            score: 102,
            time: 1540065131,
            title: "Show HN: Lipreading with Deep Learning",
            type: "story",
            url: "https://github.com/astorfi/lip-reading-deeplearning"
        },
        ...props,
    }
}

describe('Title Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = createTestProps();
        wrapper = shallow(<Title {...props} />);
    });

    it('should render <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render all props value', () => {
        expect(wrapper.text()).toEqual(
            `Show HN: Lipreading with Deep Learning(github.com) 102 points by irsina <TimeAgo /> | <Link />`
            );
    });

    // matching snapshot
    // it('should render correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });
})
