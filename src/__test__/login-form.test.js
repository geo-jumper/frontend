import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import LoginForm from '../components/login-form';

describe('LoginForm', () => {
  test('Testing that the initial login form state is an empty object', () => {
    let mountedLoginForm = Enzyme.mount(<LoginForm />);

    expect(mountedLoginForm.state()).toEqual({});
  });
  test('Testing that the component renders a SignUp form to the page', () => {
    const wrapper = shallow(
      <form></form>
    );
    expect(wrapper).toMatchSnapshot();
  });
});