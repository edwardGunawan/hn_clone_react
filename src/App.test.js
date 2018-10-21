import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';

import Header from './Header';
import Main from './Main';

configure({adapter: new Adapter()});

describe('Testing App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  })
  it('should have Header and Footer', () => {
    expect(wrapper.containsAllMatchingElements([
      <Header/>,
      <Main/>
    ])).toEqual(true); 
  });
})
