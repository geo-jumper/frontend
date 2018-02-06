import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import SignupForm from '../components/signup-form';

describe('SignupForm', () => {
  test('Testing that the initial signup form state is an empty object', () => {
    let mountedSignUpForm = Enzyme.mount(<SignupForm />);

    expect(mountedSignUpForm.state()).toEqual({});
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

    wrapper.setState({[name] : value});

    expect(wrapper.state()).toEqual({[name] : value});
  });
});