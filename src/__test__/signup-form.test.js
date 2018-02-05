import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import SignupForm from '../components/signup-form';

describe('SignupForm', () => {
  test('Testing that the initial signup form state is an empty object', () => {
    let mountedSignUpForm = Enzyme.mount(<SignupForm />);

    expect(mountedSignUpForm.state()).toEqual({});
  });
});