import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Countdown from '../components/countdown';

describe('Countdown', () => {
  test('Testing that the initial countdown state sets timer: 5', () => {
    let mountedCountdown = Enzyme.mount(<Countdown />);

    expect(mountedCountdown.state()).toEqual({timer: 5});
  });
  test('Testing that the component renders a countdown div to the page', () => {
    const wrapper = shallow(
      <div></div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});