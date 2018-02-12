import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';


Enzyme.configure({adapter: new Adapter()});

import Home from '../components/home';

describe('Home', () => {
  test('render a heading', () => {
    const wrapper = shallow(
      <h1>Geo-Jumper</h1>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('render a div', () => {
    const wrapper = shallow(
      <div id='home'></div>
    );
    expect(wrapper.prop('id')).toEqual('home');
  });
});