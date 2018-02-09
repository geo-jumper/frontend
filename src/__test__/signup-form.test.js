import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import SignupForm from '../components/signup-form';

describe('SignupForm', () => {
  test('Testing that the initial signup form state is an empty object', () => {
    let mountedSignUpForm = Enzyme.mount(<SignupForm />);

    const expected = {
      email: '',
      username: '',
      password: '',
    };

    expect(mountedSignUpForm.state()).toEqual(expected);
  });
  test('Testing that the component renders a SignUp form to the page', () => {
    const wrapper = shallow(
      <form></form>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Testing handleChange events', () => {

    let wrapper = Enzyme.mount(<SignupForm />);

    let name = 'name';
    let value = 'value';

    const event = {};
    event.target = {};

    let mockEvent = event.target;
    mockEvent.name = 'email';
    mockEvent.value = 'testValue';

    console.log(wrapper);
    // wrapper.handleChange(mockEvent);

    expect(wrapper.state().email).toEqual('');
  });
});
