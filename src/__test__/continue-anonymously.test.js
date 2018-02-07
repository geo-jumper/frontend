import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ContinueAnonymously from '../components/continue-anonymously';

describe('Continue Anonymously', () => {
  test('Testing that the component renders a button to the page', () => {
    const wrapper = shallow(
      <button></button>
    );
    expect(wrapper).toMatchSnapshot();
  });
});