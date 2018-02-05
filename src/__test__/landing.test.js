import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';


Enzyme.configure({adapter: new Adapter()});

import Landing from '../components/landing';

describe('Landing', () => {
  test('render a heading', () => {
    const wrapper = shallow(
      <h1> Welcome to Geo-Jumper </h1>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('render a div id', () => {
    const wrapper = shallow(
      <div id="landing"></div>
    );
    expect(wrapper.prop('id')).toEqual('landing');
  });
});


